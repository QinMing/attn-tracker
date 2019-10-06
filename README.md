# Attention Tracker

## by Attentive AI

##### What It Does

Our app empowers teachers, classrooms, and educators. We detect how attentive students are real-time in the classroom and throughout the day. We provide a seamless user experience showing if a student is paying attention, how often students engage (like raising their hands), and display other actionable background information about individual students (hunger, happiness, sleep, stress, etc).

We collect video and pictures from the phone camera, detect certain facials feature on the device, and use AI/ML for advanced behavior detection.

We believe technology can be more attentive to what's happening in the classroom and provide background context to each and every student. We are Attentive AI, and we are on a mission to help teachers, classrooms, and schools bring data-driven learning awareness anywhere in the world with a smartphone and 5G.

##### Inspiration:

Many are working to understand how IoT will revolutionize design and manufacturing. When brainstorming for this hackathon we sought out innovation by borrowing from those industries and applying them to a problem that we were passionate about, Education. We set out to provide the benefits of IoT data, cleansed through the lens of AI, to provide teachers with the realtime, relevant, and contextual information needed to serve their students. By further discussing with teachers, we learned more about their teaching challenges and refined our approach in order to incorporate key metrics (like attention) and to provide actionable contextual information about the students (academic history, sleep, socioeconomics, etc). And we focused on designing a seamless, in-situation user interface. .

##### How We Built It

We built an AI-empowered, AR-enabled app to detect more about what's going on in the classroom and integrates additional sensor and wearable data into a tool for teachers, counselors and schools.

The app we created uses the device camera to collect and identify facial information (gaze, face posture, eye direction, openness of eyes), all scientifically validated inputs for detecting attention. We use these inputs to calculate a real-time attention score. We then map this metric into a real-time seamless AR overlay for each person and provide additional contextual and actionable items about individual students (hunger, happiness, sleep, stress, etc).

We used React Native and Expo for developing the cross-platform app for Android (iOS coming soon). We leveraged the camera libraries and facial detection libraries for main facial information.

Using IBM Watson Visual Recognition, we developed a custom classifier for detecting unique classroom behaviors. Specifically, we collected pictures and trained our classifier for object detection, We created a backend on IBM Cloud. 5G allows us to quickly transmit images and video to the backend and seamless detect and share these metrics back into the app.

##### What We Learned / Challenges we ran into

Design and UI Challenges: Comprehensive visualizing and design of attentiveness score for students in a AR Tech: Integrating new team with new technologies and programming languages Customer Developing: Spending the time to learn and understanding more about teachers, educational challenges and needs, and ways to approach solving them.

##### What's next:

- On the technical side, we want to integrate more dimensions, like IoT and wearables, recognize the person, add more contextual data to the overlay.
- On the business side, we look forward to discussing with educators and investors about potential steps forwards and develop the tools and metrics most beneficial to teachers.
- On the design side, we need to imagine and develop useful dashboard for key stakeholders.