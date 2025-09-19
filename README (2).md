# Post Manager – React + TypeScript

This project is a **candidate assessment for Titanium Training**.  
It demonstrates a small Post Manager application built with **React, Vite, and TypeScript**, implementing full **CRUD functionality** with the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/).  

---

## 🚀 Features

- **Fetch & Display Posts**  
  - Fetches 10 posts from `GET /posts?_limit=10`  
  - Displays each post’s title and body  

- **Create Post**  
  - Add new post via a form (title + body)  
  - UI updates immediately after submission  

- **Update Post**  
  - Edit post (title + body)  
  - Updates both API and UI  

- **Delete Post**  
  - Remove post using `DELETE /posts/{id}`  
  - Reflects instantly in the UI  

- **TypeScript**  
  - Strong typing for props, state, and API responses  
  - Avoids use of `any`  

- **Bonus (Optional)**  
  - Pagination or search  
  - Success/error snackbars  
  - Inline comments for clarity  
  - Unit test with React Testing Library  

---

## 🛠️ Tech Stack

- [React](https://react.dev/) (with Hooks)  
- [Vite](https://vitejs.dev/) for fast build and dev server  
- [TypeScript](https://www.typescriptlang.org/) for type safety  
- [Material UI](https://mui.com/) for UI components (if used)  
- [React Query](https://tanstack.com/query/latest) for API data fetching (if used)  
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) for testing  

---

## 📂 Project Structure

```
post-manager/
├── src/
│   ├── components/   # Reusable UI components
│   ├── hooks/        # Custom hooks (e.g. usePosts, useSnackbar)
│   ├── pages/        # Page components
│   ├── services/     # API calls
│   ├── types/        # TypeScript types/interfaces
│   └── App.tsx       # Root component
├── public/
├── package.json
└── tsconfig.json
```

---

## ⚡ Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/your-username/post-manager.git
cd post-manager
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the development server
```bash
npm run dev
```

App will be available at **http://localhost:5173**

### 4. Run tests (if included)
```bash
npm run test
```

---

## ✅ Example Usage

- Open the app in the browser  
- View list of posts  
- Add a new post via the form  
- Edit a post by clicking **Edit**  
- Delete a post by clicking **Delete**  

---

## 📌 Notes

- This project uses **JSONPlaceholder**, so create/update/delete actions do not persist on refresh.  
- UI updates optimistically to simulate real-world CRUD behavior.  
- Designed to be completed within ~3–4 hours as per assessment instructions.  

---

## 👨‍💻 Author

**Adebimpe Adetomiwa**  
Candidate for React Developer at Titanium Training  
