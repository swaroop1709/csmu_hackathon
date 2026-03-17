# Deployment Guide: Avengers Language Learner

Since your project is a full-stack App (React + Node.js), the easiest way to deploy it for free is using **Render** (for the Backend) and **Vercel** (for the Frontend).

---

## 1. Deploy the Backend (Render)
1. Go to [Render.com](https://render.com) and create a free account.
2. Click **New +** > **Web Service**.
3. Connect your GitHub repository (`Sudhanshu-Nijap/csmu`).
4. **Configuration**:
   - **Name**: `avengers-translator-api`
   - **Root Directory**: `server`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
5. Click **Deploy Web Service**.
6. **Important**: Once deployed, copy your **Web Service URL** (e.g., `https://avengers-translator-api.onrender.com`).

---

## 2. Deploy the Frontend (Vercel)
1. Go to [Vercel.com](https://vercel.com) and sign in with GitHub.
2. Click **Add New** > **Project**.
3. Import the same repository.
4. **Project Settings**:
   - **Framework Preset**: Vite
   - **Root Directory**: `client`
5. **Environment Variables**:
   - Add a new variable named `VITE_API_URL`.
   - **Value**: Use the Render URL you copied in Step 1 (e.g., `https://avengers-translator-api.onrender.com`).
6. Click **Deploy**.

---

## 3. Post-Deployment Check
- Your frontend will be live at a URL provided by Vercel (e.g., `avengers-learner.vercel.app`).
- If you see a CORS error, you can update the `server/server.js` file to explicitly allow your Vercel URL in the `cors()` config, though the default `app.use(cors())` usually allows all origins for development.

### Summary of Commands
- **Backend Build**: `npm install`
- **Backend Start**: `node server.js`
- **Frontend Build**: `npm run build`
- **Frontend Environment**: `VITE_API_URL = [YOUR_BACKEND_URL]`
