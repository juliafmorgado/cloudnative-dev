# Challenge 2: Store Texts in a File System

This branch of the repository implements storing text data using file system APIs. This is part of the challenge series by Salaboy to enhance your Cloud Native skills. The challenge 2 created by Salaboy can be found [here](https://github.com/salaboy/cloud-native-dev/tree/main/2).

## Instructions

### Prerequisites
- Node.js installed

### Build and Run
1. Clone this repository: `git clone https://github.com/juliafmorgado/cloud-native-dev.git`
2. Navigate to the `challenge-2` directory: `cd challenge-2`
3. Switch to the `fs` branch: `git checkout fs`
4. Install dependencies: `npm install`
5. Start the server: `node app/server.js`
6. Open `http://localhost:3000` in your web browser

### Test
To test the application, follow the steps in the "Build and Run" section, then interact with the application as described in the challenge. You should see that texts persist across server restarts, as they're now stored in a file.

### Implementation Details
- The server.js file has been modified to include functionality for saving and retrieving texts using file system APIs.
- Ensure that appropriate error handling and file management practices are followed when working with the file system.