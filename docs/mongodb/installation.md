---
sidebar_position: 2
---

### MongoDB Installation on Windows

Below is a step-by-step guide to install MongoDB on a Windows system:

---

#### **Step 1: Download MongoDB Installer**
1. Go to the official MongoDB website: [https://www.mongodb.com/try/download/community](https://www.mongodb.com/try/download/community).
2. Under the **Community Server** section, select:
    - **Version**: Choose the latest stable version.
    - **Platform**: Select "Windows".
    - **Package**: Choose "MSI" (recommended for easier installation).
3. Click **Download**.

---

#### **Step 2: Run the MongoDB Installer**
1. Locate the downloaded `.msi` file and double-click to run it.
2. Follow the installation wizard:
    - Accept the license agreement.
    - Choose **Complete** setup type (recommended for most users).
    - Optionally, you can customize the installation path (e.g., `C:\Program Files\MongoDB\Server\<version>`).
3. Check the box to install **MongoDB Compass** (a graphical interface for MongoDB, optional but recommended).
4. Click **Install** and wait for the installation to complete.

---

#### **Step 3: Set Up MongoDB Environment**
1. Create the MongoDB data and log directories:
    - Open Command Prompt as Administrator.
    - Run the following commands:
      ```bash
      md "C:\data\db"
      md "C:\data\log"
      ```
    - These directories will store your MongoDB database files and logs.

2. Configure the MongoDB configuration file:
    - Navigate to the MongoDB installation directory (e.g., `C:\Program Files\MongoDB\Server\<version>\bin`).
    - Create a file named `mongod.cfg` in the `bin` directory.
    - Add the following content to the file:
      ```yaml
      systemLog:
        destination: file
        path: C:\data\log\mongod.log
      storage:
        dbPath: C:\data\db
      ```

---

#### **Step 4: Install MongoDB as a Windows Service**
1. Open Command Prompt as Administrator.
2. Run the following command to install MongoDB as a service:
   ```bash
   "C:\Program Files\MongoDB\Server\<version>\bin\mongod.exe" --config "C:\Program Files\MongoDB\Server\<version>\bin\mongod.cfg" --install
   ```
3. Start the MongoDB service:
   ```bash
   net start MongoDB
   ```
4. To stop the service, use:
   ```bash
   net stop MongoDB
   ```

---

#### **Step 5: Verify MongoDB Installation**
1. Open Command Prompt.
2. Run the following command to connect to the MongoDB server:
   ```bash
   "C:\Program Files\MongoDB\Server\<version>\bin\mongo.exe"
   ```
3. If the connection is successful, you will see the MongoDB shell prompt (`>`).

---

#### **Step 6: (Optional) Add MongoDB to System PATH**
To make it easier to run MongoDB commands from any directory:
1. Open **Environment Variables**:
    - Right-click on **This PC** > **Properties** > **Advanced system settings** > **Environment Variables**.
2. Under **System Variables**, find and select `Path`, then click **Edit**.
3. Add the MongoDB `bin` directory path (e.g., `C:\Program Files\MongoDB\Server\<version>\bin`).
4. Click **OK** to save changes.

---

#### **Step 7: Test MongoDB**
1. Open Command Prompt.
2. Run the following commands:
   ```bash
   mongo
   ```
3. In the MongoDB shell, run:
   ```bash
   db.test.insertOne({ name: "MongoDB Test" })
   db.test.find()
   ```
   If the document is inserted and retrieved successfully, your MongoDB installation is working correctly.

---

#### **Step 8: Install MongoDB Compass (Optional)**
If you didn’t install MongoDB Compass during the installation:
1. Download MongoDB Compass from [https://www.mongodb.com/try/download/compass](https://www.mongodb.com/try/download/compass).
2. Run the installer and follow the steps to complete the installation.
3. Launch MongoDB Compass and connect to your local MongoDB instance (`mongodb://localhost:27017`).

---

# MongoDB Installation Guide

Below is a step-by-step guide to install MongoDB on Windows. You can also watch the video tutorial for a visual walkthrough:

<iframe width="560" height="315" src="https://www.youtube.com/embed/aaspCQmBUbg?si=WsRXY1hEODU_sgBN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Steps to Install MongoDB
1. Download the MongoDB installer from the official website.
2. Run the installer and follow the setup wizard.
3. Set up the data and log directories.
4. Configure MongoDB as a Windows service.
5. Verify the installation by connecting to the MongoDB shell.

You’ve successfully installed MongoDB on Windows! 🎉