// ============================================
// MAIN APPLICATION COMPONENT
// ============================================
// This is the root component that contains the entire user management interface
// It handles all user interactions and manages the application state

import { UserService } from './services/user.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Component decorator defines the component's metadata and configuration
@Component({
  selector: 'app-root', // HTML tag used to render this component <app-root></app-root>
  standalone: true, // This is a standalone component (doesn't require NgModule)
  imports: [CommonModule, FormsModule], // Import required modules for template functionality
  templateUrl: './app.html', // Path to the component's HTML template
  styleUrl: './app.css', // Path to the component's CSS styles
})
export class AppComponent implements OnInit {
  // ============================================
  // Component Properties (State)
  // ============================================
  // These properties hold the component's data and are used in the template
  
  // Array to store all users fetched from the backend
  // Used to display users in the table
  users: any[] = [];
  
  // Form fields for adding new users
  // These are bound to input fields in the template with [(ngModel)]
  firstName = ''; // User's first name input
  lastName = ''; // User's last name input
  email = ''; // User's email input
  role = ''; // User's role input
  isActive = true; // User's active status (checkbox - true = checked)
  
  // Error message displayed to user if validation fails
  // Set to empty string when no error, or contains error message text
  errorMessage = '';

  // ============================================
  // Constructor & Initialization
  // ============================================

  // Inject UserService using Angular's dependency injection
  // UserService handles all GraphQL operations
  constructor(private userService: UserService) {}

  // NgOnInit is called after component is initialized
  // Angular's lifecycle hook that runs after constructor
  // Used to perform initial setup like fetching data
  ngOnInit(): void {
    // Load all users when component is first created
    // This populates the users array with data from the backend
    this.loadUsers();
  }

  // ============================================
  // Data Loading
  // ============================================

  // Fetch all users from the backend
  // This method calls the UserService to execute the GET_USERS GraphQL query
  loadUsers() {
    // Call the getUsers service method which returns an Observable
    // subscribe() listens for the response from the GraphQL server
    this.userService.getUsers().subscribe({
      // next callback: called when data is successfully retrieved
      next: ({ data }) => {
        // Log the fetched data for debugging purposes
        console.log('Users from backend:', data.getUsers);
        
        // Map the returned users array and add an 'editing' flag to each user
        // The 'editing' flag toggles between view mode and edit mode
        this.users = data.getUsers.map((u: any) => ({
          ...u, // Spread operator: copy all properties from user object
          editing: false, // Initialize editing flag to false (view mode)
        }));
      },
      // error callback: called if the GraphQL query fails
      error: (err) => {
        // Log error to browser console for debugging
        console.error('Error fetching users:', err);
      },
    });
  }

  // ============================================
  // Add User Functionality
  // ============================================

  // Add a new user to the database
  // This method validates the form and calls the service to create a user
  addUser() {
    // Clear previous error messages before starting validation
    this.errorMessage = '';

    // Validate that all required fields are filled (not empty)
    if (!this.firstName || !this.lastName || !this.email || !this.role) {
      this.errorMessage = 'Please fill all fields';
      return;
    }

    // Validate first name length (minimum 4 characters)
    // trim() removes whitespace to prevent spaces-only strings from being valid
    if (this.firstName.trim().length < 4) {
      this.errorMessage = 'First Name must be at least 4 characters long';
      return;
    }

    // Validate last name length (minimum 4 characters)
    if (this.lastName.trim().length < 4) {
      this.errorMessage = 'Last Name must be at least 4 characters long';
      return;
    }

    // Validate email format using regular expression (regex)
    // Pattern: ^[^\s@]+@[^\s@]+\.[^\s@]+$
    // Checks for: something@something.something format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.email)) {
      this.errorMessage = 'Please enter a valid email address (e.g., user@example.com)';
      return;
    }

    // Validate role length (minimum 2 characters)
    if (this.role.trim().length < 2) {
      this.errorMessage = 'Role must be at least 2 characters long';
      return;
    }

    // All validations passed - call the service to add user
    this.userService.addUser({
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      role: this.role,
      isActive: this.isActive,
    }).subscribe({
      // next: called when user is successfully created
      next: () => {
        this.errorMessage = '';
        this.resetForm();
        this.loadUsers();
      },
      // error: called if the GraphQL mutation fails
      error: (err: any) => {
        console.error('Error adding user:', err);
        this.errorMessage = 'Error adding user';
      },
    });
  }

  // ============================================
  // Form Management
  // ============================================

  // Reset all form fields to empty/default values
  resetForm() {
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.role = '';
    this.isActive = true;
    this.errorMessage = '';
  }

  // ============================================
  // Edit User Functionality
  // ============================================

  // Save changes to an edited user
  saveUser(user: any) {
    // Call the service to update the user in the backend
    this.userService.updateUser({
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      role: user.role,
      isActive: user.isActive,
    }).subscribe({
      // next: called when user is successfully updated
      next: () => {
        // Exit edit mode by setting editing flag to false
        user.editing = false;
        // Refresh the user list to reflect changes
        this.loadUsers();
      },
      // error: called if the GraphQL mutation fails
      error: (err: any) => {
        console.error('Error updating user:', err);
      },
    });
  }

  // ============================================
  // Delete User Functionality
  // ============================================

  // Delete a user from the database
  deleteUser(id: string) {
    // Show confirmation dialog before deletion
    if (confirm('Are you sure you want to delete this user?')) {
      // User confirmed - call the service to delete
      this.userService.deleteUser(id).subscribe({
        // next: called when user is successfully deleted
        next: () => {
          // Refresh the user list to remove the deleted user
          this.loadUsers();
        },
        // error: called if the GraphQL mutation fails
        error: (err) => {
          console.error('Error deleting user:', err);
        },
      });
    }
  }

  // ============================================
  // Toggle Edit Mode
  // ============================================

  // Enable edit mode for a user
  editUser(user: any) {
    // Set editing flag to true to show input fields
    user.editing = true;
  }
}
