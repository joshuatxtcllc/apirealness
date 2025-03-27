# API Keymaster

A secure vault for managing your API keys across multiple development platforms.

## Features

- **Secure Encryption**: All keys are stored with AES-256-GCM encryption
- **Master Password**: Single password to unlock all your API keys
- **Platform Integration**: Ready for GitHub, Replit, Netlify, and other platforms
- **Environment Variables**: Automatically inject keys as environment variables
- **CLI Interface**: Simple command-line interface for all operations

## Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/api-keymaster.git
cd api-keymaster

# Install dependencies
npm install

# Install globally (optional)
npm install -g .
```

## Usage

### Initialize the Vault

```bash
keymaster init
```

You'll be prompted to create a master password for your vault.

### Add a Key

```bash
keymaster add github personal_access_token ghp_your_token_here
keymaster add replit api_key your_replit_key --description "For My Project"
```

### List Keys

```bash
keymaster list
```

### Get a Key

```bash
keymaster get github personal_access_token
keymaster get github personal_access_token --copy
```

### Execute Commands with Keys

This will run your command with the API keys for the specified platform set as environment variables.

```bash
keymaster exec github "gh repo clone username/repo"
keymaster exec netlify "netlify deploy --prod"
```

### Export Keys for Shell Use

```bash
keymaster export github
keymaster export github --copy
```

### Remove a Key

```bash
keymaster remove github personal_access_token
```

## Security

- Keys are encrypted using AES-256-GCM
- The vault is stored in `~/.api-keymaster/vault.enc`
- The master password is never stored
- The vault file has limited permissions (mode 0600)

## Use with GitHub, Replit, and Netlify

API Keymaster is optimized for use with these platforms:

### GitHub

```bash
# Add your GitHub token
keymaster add github personal_access_token your_token_here

# Use with GitHub CLI
keymaster exec github "gh repo create my-new-repo --private"
```

### Replit

```bash
# Add your Replit API token
keymaster add replit api_key your_replit_key

# Example: Use with a Node.js script that interacts with Replit API
keymaster exec replit "node scripts/replit-deploy.js"
```

### Netlify

```bash
# Add your Netlify auth token
keymaster add netlify auth_token your_netlify_token
keymaster add netlify site_id your_site_id

# Deploy to Netlify
keymaster exec netlify "netlify deploy --site $NETLIFY_SITE_ID --auth $NETLIFY_AUTH_TOKEN --prod"
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
