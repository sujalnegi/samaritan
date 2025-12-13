<div align="center">
  <a href="https://moonshot.hackclub.com" target="_blank">
    <img src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/35ad2be8c916670f3e1ac63c1df04d76a4b337d1_moonshot.png" 
         alt="This project is part of Moonshot, a 4-day hackathon in Florida visiting Kennedy Space Center and Universal Studios!" 
         style="width: 80%;">
  </a>
</div>

# Samaritan
<div align="center">
  <img src="app/static/images/logo.svg" alt="Samaritan Logo" width="600"/>

**Samaritan is a suite for all your productivity needs. It helps you to write, summarize, explain your code and check your grammar.**

</div>

## Features

* **Secure Access:**
    * **Google Authentication:** Simple one tap login through your Google Account.
    
* **Productivity Suite:**
    * **AI Writer:** aka *Shakespeare* Overcome writer's block instantly. Generate creative content, emails, essays, and reports with a simple prompt.
    * **Smart Summarizer:** Intelligently digests long texts into 5, 10 ,15... bullet points.
    * **Code Explainer:** aka *Decypher* Simplify complex code snippets. Provides clear, step-by-step logic breakdowns, making it perfect for debugging and learning.
    * **Grammar Checker:** Polishes your writing by correcting grammar, syntax, and enhancing overall style for professional results.

* **Modern Interface:**
    * **Dashboard:** A centralized hub to access all tools.
    * **Responsive Design:** Clean, dark-themed UI that works smoothly across devices.
    * **Markdown Support:** beautifully rendered outputs for code and formatted text.

## Demo Video

Here is the demo Video: [Link](https://drive.google.com/file/d/1c1Kyfcm4XzVsBWn76F2uTPDjb3CXXCzc/view?usp=drive_link)

### Deployed (Live) Link

Its [Here](https://s-api-ce5e.onrender.com)

## Technologies Used

* **Backend:** Python 3, Flask
* **AI Model:** Google Gemini 2.0 Flash (`google-generativeai`)
* **Authentication:** Firebase Admin SDK & Firebase Auth
* **Database:** SQLite (via Flask-SQLAlchemy)
* **Frontend:** HTML5, CSS3, JavaScript




## Local Setup and Installation

Follow these steps to get the application running on your local machine.

### 1. Prerequisites

* Python 3.8+
* `pip` (Python package installer)
* A Firebase Project with Authentication enabled.

### 2. Clone the Repository

Clone this repository to your local machine:

```bash
git clone https://github.com/sujalnegi/samaritan.git
cd samaritan
```

### 3. Create a Virtual Environment

It is highly recommended to create a virtual environment(lol) to manage project dependencies.

```bash
# For Windows
python -m venv venv
venv\Scripts\activate

# For macOS/Linux
python3 -m venv venv
source venv/bin/activate
```

### 4. Install Dependencies

Install all the required Python libraries using `pip`.

```bash
pip install -r requirements.txt
```

### 5. Configuration

1.  **Environment Variables**: Create a `.env` file in the root directory (refer to the gdrive link provided below) and add:
    ```env
    FLASK_APP=run.py
    FLASK_ENV=development
    SECRET_KEY=your-secret-key
    GEMINI_API_KEY=your-gemini-api-key
    
    # Firebase Config
    FIREBASE_SERVICE_ACCOUNT=path/to/your/firebase-adminsdk.json
    FIREBASE_API_KEY=your-firebase-api-key
    FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
    FIREBASE_PROJECT_ID=your-project-id
    FIREBASE_STORAGE_BUCKET=your-project.appspot.com
    FIREBASE_MESSAGING_SENDER_ID=your-sender-id
    FIREBASE_APP_ID=your-app-id
    ```

    There are some more files you would need. [HERE](https://drive.google.com/drive/folders/1sa6OTUdX5nOapoJyBsPEqQ5i4veG4I4k?usp=sharing)

2.  **Firebase Admin SDK**: Download your Firebase Admin SDK JSON file and place it in the project root. Update `FIREBASE_SERVICE_ACCOUNT` in `.env` with its filename.

### 6. Run the Application

Once the setup is complete, initialize the database and start the server:

```bash
python run.py
```

Now, open your web browser and navigate to:

```
http://127.0.0.1:5000/
```

## How to Use

1.  **Login**: Sign in using your Google account.
2.  **Dashboard**: Select a tool from the main dashboard (Shakespeare, Summarizer, Decypher, or Grammar).
3.  **Input**: Enter your text or code into the input field.
4.  **Result**: View the AI-generated output formatted in Markdown.

## Author

- Email: [sujal1negi@gmail.com](mailto:sujal1negi@gmail.com)
- Instagram: [@_sujal1negi_](https://www.instagram.com/_sujalnegi_/)
