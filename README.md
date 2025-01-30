# Project description

This project is an API which provides public information, including my registered HNG email address, the current date and time in ISO 8601 format, and this GitHub repository URL.

## How to run the project locally

git clone https://github.com/DevGracies/Public-Api-To-Retrieve-Basic-Information.git
cd your-repo
npm install
node index.js

## API Specification

- **Endpoint:** `GET <your-url>/api/information`
- **Response Format (200 OK):**
  - Returns a JSON object with three fields:
    - `email`: My email address
    - `current_datetime`: The current date and time in ISO 8601 format
    - `github_url`: My link to my GitHub repository

### Example of usage

```json
{
  "email": "degracies04@gmail.com",
  "current_datetime": "2025-01-30T09:30:00Z",
  "github_url": "https://github.com/DevGracies/Public-Api-To-Retrieve-Basic-Information.git
"
}

### For hiring experienced Node.js developers,
 visit https://hng.tech/hire/nodejs-developers.
```
