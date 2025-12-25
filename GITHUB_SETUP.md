# GitHub Setup Guide for User Management Project

Follow these steps to push your User Management project to GitHub.

## Step 1: Create a GitHub Repository

1. Go to [GitHub.com](https://github.com)
2. Log in to your account (create one if needed)
3. Click the **"+"** icon in the top right corner
4. Select **"New repository"**
5. Fill in the repository details:
   - **Repository name:** `usermanagement` (or `user-management`)
   - **Description:** `Full-stack User Management System with GraphQL backend and Angular frontend`
   - **Visibility:** Public or Private (your choice)
   - **Initialize repository:** Leave unchecked (we'll push existing code)
6. Click **"Create repository"**

## Step 2: Initialize Git Locally

Open a terminal/command prompt in the project root directory (`D:\Angular-GQL-Proj\user-management-backend`) and run:

```bash
# Initialize git repository
git init

# Configure your git user (first time only)
git config user.name "Your Name"
git config user.email "your.email@example.com"
```

## Step 3: Add Files to Git

```bash
# Add all files to staging area
git add .

# Verify files are staged (optional)
git status
```

You should see files ready to be committed (in green).

## Step 4: Create Initial Commit

```bash
# Create the first commit
git commit -m "Initial commit: User Management System with GraphQL and Angular"
```

## Step 5: Connect to GitHub Repository

After creating your repository on GitHub, you'll see instructions. Copy the repository URL (HTTPS or SSH).

**Example HTTPS URL:** `https://github.com/your-username/usermanagement.git`

**Example SSH URL:** `git@github.com:your-username/usermanagement.git`

Then run:

```bash
# Add remote repository
git remote add origin https://github.com/your-username/usermanagement.git

# Verify the remote connection
git remote -v
```

## Step 6: Push to GitHub

```bash
# Rename branch to main (recommended)
git branch -M main

# Push code to GitHub
git push -u origin main
```

**Note:** The first push uses `-u` flag to set upstream. Future pushes only need `git push`.

## Step 7: Verify on GitHub

1. Go to your GitHub repository URL: `https://github.com/your-username/usermanagement`
2. You should see your project files and folders
3. Check that all files are uploaded correctly

## Project Structure on GitHub

Your repository will contain:
```
usermanagement/
├── src/
│   ├── index.js              # Backend server
│   ├── schema.js             # GraphQL schema
│   ├── resolvers.js          # GraphQL resolvers
│   └── data.js               # Sample data
├── user-management-frontend/
│   ├── src/
│   │   ├── app/
│   │   │   ├── app.ts
│   │   │   ├── app.html
│   │   │   ├── services/
│   │   │   └── graphql/
│   │   ├── main.ts
│   │   └── index.html
│   └── package.json
├── package.json              # Backend dependencies
├── README.md                 # Project documentation
└── .gitignore               # Files to ignore
```

## Future Git Commands

After the initial setup, use these commands:

```bash
# Check status of changes
git status

# Stage all changes
git add .

# Commit changes
git commit -m "Your commit message"

# Push changes to GitHub
git push

# Pull latest changes from GitHub
git pull

# Create a new branch
git checkout -b feature-name

# Switch between branches
git checkout branch-name
```

## Helpful Git Tips

### Commit Messages Best Practices
- Use clear, descriptive commit messages
- Start with a verb: "Add", "Fix", "Update", "Remove"
- Examples:
  - `git commit -m "Add user deletion feature"`
  - `git commit -m "Fix email validation regex"`
  - `git commit -m "Update GraphQL schema for new fields"`

### Creating Branches
```bash
# Create feature branch
git checkout -b feature/new-feature

# Create bug fix branch
git checkout -b bugfix/fix-description

# Create release branch
git checkout -b release/v1.0.0
```

### Undoing Changes
```bash
# Undo unstaged changes
git checkout -- filename

# Unstage a file
git reset filename

# Undo last commit (keep changes)
git reset --soft HEAD~1

# Undo last commit (discard changes)
git reset --hard HEAD~1
```

## Troubleshooting

### Error: "fatal: remote origin already exists"
```bash
git remote remove origin
git remote add origin https://github.com/your-username/usermanagement.git
```

### Error: "Permission denied (publickey)"
Use HTTPS instead of SSH:
```bash
git remote set-url origin https://github.com/your-username/usermanagement.git
```

### Want to change repository URL
```bash
git remote set-url origin https://github.com/your-username/new-repo.git
```

### Large files causing issues
Add to `.gitignore`:
```
node_modules/
*.log
dist/
build/
.angular/
```

## GitHub Repository Setup

Once pushed, you can enhance your GitHub repository by:

1. **Adding a .gitignore** ✓ (Already created)
2. **Adding a LICENSE** - Choose from [https://choosealicense.com](https://choosealicense.com)
3. **Adding Topics** - Go to repository settings and add: `angular`, `graphql`, `node`, `rest-api`
4. **Enabling GitHub Pages** - For frontend documentation
5. **Adding CI/CD** - Setup GitHub Actions for automated testing

## Next Steps

After pushing to GitHub:

1. Share the repository URL with your team
2. Add collaborators in Settings → Collaborators
3. Create Issues for bugs and features
4. Create Pull Requests for code reviews
5. Use Discussions for team communication

## Resources

- [Git Documentation](https://git-scm.com/doc)
- [GitHub Guides](https://guides.github.com)
- [GitHub Docs](https://docs.github.com)
- [Git Cheat Sheet](https://github.github.com/training-kit/downloads/github-git-cheat-sheet.pdf)

---

**Happy coding and happy pushing to GitHub! 🚀**
