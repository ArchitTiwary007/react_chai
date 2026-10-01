const config = {
    appwriteUrl: (import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId: (import.meta.env.VITE_PROJECT_ID),
    appwriteDatabaseId: (import.meta.env.VITE_DATABASE_ID),
    appwriteTableId: (import.meta.env.VITE_TABLE_ID),
    appwriteBucketId: (import.meta.env.VITE_BUCKET_ID),
}

console.log("APPWRITE CONFIG:", config);

export default config