const conf = {
  appWriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
  VITE_APPERITE_PROJECT_ID: String(import.meta.env.VITE_APPERITE_PROJECT_ID),
  VITE_APPWRITE_DATABASE_ID: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
  VITE_APPWRITE_COLLECTION_ID: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
  VITE_APPWRITE_BUCKET_ID: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),

}

export default conf;