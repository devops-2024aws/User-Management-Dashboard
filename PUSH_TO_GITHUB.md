# How to Push User Management Project to GitHub

## Complete Step-by-Step Instructions

Follow these exact steps to push your project to GitHub repository named "usermanagement".

---

## STEP 1: Create GitHub Repository (Web Browser)

1. Open https://github.com
2. Click **"Sign In"** (or create account if needed)
3. Click **"+"** icon (top right) → **"New repository"**
4. Fill in the form:
   ```
   Repository name: usermanagement
   Description: Full-stack User Management System with GraphQL and Angular
   Public / Private: Your choice
   ```
5. **Do NOT check** "Initialize this repository with a README"
6. Click **"Create repository"**

You'll see a page with setup instructions. **Copy the HTTPS URL** shown:
```
https://github.com/YOUR-USERNAME/usermanagement.git
```

---

## STEP 2: Open Command Prompt/Terminal

On Windows:
- Press `Win + R`
- Type: `cmd`
- Press Enter

Or open PowerShell:
- Right-click on Start Menu
- Select "Windows PowerShell"

Navigate to your project:
```bash
cd D:\Angular-GQL-Proj\user-management-backend
```

Verify you're in the right directory (you should see `src`, `user-management-frontend`, `package.json`):
```bash
dir
```

---

## STEP 3: Initialize Git

```bash
# Initialize git repository
git init
```

Expected output:
```
Initialized empty Git repository in D:\Angular-GQL-Proj\user-management-backend\.git
```

---

## STEP 4: Configure Git User (First Time Only)

Replace with your actual name and email:

```bash
git config user.name "Your Full Name"
git config user.email "your.email@gmail.com"
```

Example:
```bash
git config user.name "John Doe"
git config user.email "john.doe@gmail.com"
```

---

## STEP 5: Add Files to Git

```bash
# Stage all files
git add .
```

Check what files are staged:
```bash
git status
```

You should see files in green (ready to commit).

---

## STEP 6: Create First Commit

```bash
git commit -m "Initial commit: User Management System with GraphQL and Angular"
```

Expected output:
```
[main (root-commit) abc1234] Initial commit: User Management System with GraphQL and Angular
 XX files changed, XXXX insertions(+)
```

---

## STEP 7: Connect to GitHub Repository

Replace `YOUR-USERNAME` with your actual GitHub username:

```bash
git remote add origin https://github.com/YOUR-USERNAME/usermanagement.git
```

Verify connection:
```bash
git remote -v
```

You should see:
```
origin  https://github.com/YOUR-USERNAME/usermanagement.git (fetch)
origin  https://github.com/YOUR-USERNAME/usermanagement.git (push)
```

---

## STEP 8: Rename Branch to Main (Recommended)

```bash
git branch -M main
```

---

## STEP 9: Push to GitHub

```bash
git push -u origin main
```

**You may be prompted for credentials:**
- If using HTTPS, GitHub will ask for your GitHub password or personal access token
- Enter your GitHub username and password

Expected output:
```
Enumerating objects: XX, done.
Counting objects: 100% (XX/XX), done.
...
 * [new branch]      main -> main
Branch 'main' set up to track remote branch 'main' from 'origin'.
```

---

## STEP 10: Verify on GitHub

1. Open your browser
2. Go to: `https://github.com/YOUR-USERNAME/usermanagement`
3. You should see all your project files uploaded
4. Check the main page shows your README.md content

---

## ✅ Success!

Your project is now on GitHub! You can:
- Share the URL with others
- Clone it on other computers
- Add collaborators
- Track changes with commits

---

## Future Updates

After the initial push, to update your GitHub repository:

```bash
# Make changes to your files...

# Stage changes
git add .

# Commit
git commit -m "Your descriptive message"

# Push to GitHub
git push
```

---

## Useful Git Commands

```bash
# Check status
git status

# See commit history
git log --oneline

# See differences
git diff

# Undo unstaged changes
git checkout -- filename

# Undo last commit (keep changes)
git reset --soft HEAD~1

# See all branches
git branch -a

# Create new branch
git checkout -b feature-name

# Switch branch
git checkout branch-name
```

---

## Troubleshooting

### Error: "fatal: not a git repository"
- Make sure you're in the right directory: `D:\Angular-GQL-Proj\user-management-backend`
- Run `git init` again

### Error: "fatal: remote origin already exists"
```bash
git remote remove origin
git remote add origin https://github.com/YOUR-USERNAME/usermanagement.git
```

### Error: "Permission denied"
- Check your GitHub username and password
- Or use a Personal Access Token instead of password

### Error: "Would be overwritten by merge"
```bash
git reset --hard
git pull
```

---

## GitHub URL Reference

After pushing, your repository URL will be:
```
https://github.com/YOUR-USERNAME/usermanagement
```

Share this URL with others to let them view/clone your project!

---

**Congratulations! Your project is now on GitHub! 🎉**
