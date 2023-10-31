# Sign Language Recognition and Authentication with Object Detection for Next.js App

The Sign Language Recognition and Authentication project is an innovative solution designed to facilitate communication for individuals using sign language. Leveraging TensorFlow's SSD MobileNet model and Google Authentication via NextAuth.js, this Next.js application interprets sign language gestures in real-time, displaying corresponding emojis and enabling secure user authentication.

## Features

- **Real-time Sign Language Detection:** Capture sign language gestures in real-time through the user's webcam.
- **Object Detection:** Utilize the SSD MobileNet model to detect custom signs from the webcam feed.
- **Emoji Representation:** Display emojis corresponding to detected signs on the canvas in real-time.
- **Google Authentication:** Allow users to securely authenticate using their Google accounts.
- **Responsive User Interface:** Provide a user-friendly interface for seamless interaction.

## Technologies Used

- **Next.js:** A React framework for building server-rendered applications.
- **TensorFlow.js:** A machine learning library enabling training and inference of machine learning models in the browser.
- **SSD MobileNet Model:** A pre-trained deep learning model optimized for object detection tasks.
- **Custom Sign Language Dataset:** A labeled dataset used to train the SSD MobileNet model.
- **Amazon S3 Bucket:** Cloud storage for hosting the TensorFlow.js model.
- **Canvas API:** HTML5 Canvas API for dynamically rendering emojis based on detected signs.
- **NextAuth.js:** Authentication library for Next.js applications, providing Google Authentication integration.

## How to Use

1. **Clone the Repository:**
   ```bash
   git clone <repository-url>
   cd <repository-folder>
2. **Install Dependencies:**
   ```bash
   npm install
3. **Start the Development Server:**
   ```bash
   npm run dev
4. **Access the Application:**
   Open your web browser and navigate to http://localhost:3000 to view and interact with your Next.js application running locally.
