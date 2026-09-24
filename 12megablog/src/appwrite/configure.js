import config from '../config.js'
import { Client, ID, TablesDB, Storage } from "appwrite";

export class Service{
    client = new Client();
    databases;
    bucket;
    constructor() {
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId);
        this.tablesDB = new TablesDB(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({title,content,featuredImage,status,userId}) {
        try {
            return await this.tablesDB.createRow({
                databaseId: config.appwriteDatabaseId,
                tableId: config.appwriteTableId,
                rowId: ID.unique(),
                data: {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                },
            })
        } catch (error) {
            console.log("Appwrite service :: createPost :: error", error);
        }
    }
    async updatePost(data,{ title, content, featuredImage, status, userId }) {
        try {
            return await this.tablesDB.updateRow(
                {
                    databaseId:config.appwriteDatabaseId,
                    tableId: config.appwriteTableId,
                    data: {
                        title,
                        content,
                        featuredImage,
                        status,
                    }
                }
            );
        } catch (error) {
            console.log("Appwrite service :: createPost :: error", error);
        }
        
    }
    async deletePost(data) {
        try {
            await this.tablesDB.deleteRow(
                {
                    databaseId: config.appwriteDatabaseId,
                    tableId: config.appwriteTableId,
                    data
                }
            )
            return true;
        } catch (error) {
            console.log("Appwrite service :: createPost :: error", error);
            return false;
        }
    }

    async getPost(data) {
        try {
            return await this.tablesDB.getRow(
                {
                    databaseId: config.appwriteDatabaseId,
                    tableId: config.appwriteTableId,
                    data
                }
            )
            
        } catch (error) {
            console.log("Appwrite service :: createPost :: error", error);
            return false;
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]) {
        try {
            return await this.tablesDB.listDocuments(
                {
                    databaseId: config.appwriteDatabaseId,
                    tableId: config.appwriteTableId,
                    queries,

                }
            )
        } catch (error) {
            console.log("Appwrite service :: createPost :: error", error)
        }
    }

    //file upload service

    async uploadFile(file) {
        try {
            return await this.bucket.createFile({
                databaseId: config.appwriteDatabaseId,
                tableId: config.appwriteTableId,
                rowId: ID.unique(),
            })
        }
        catch (error) {
            console.log("Appwrite service :: createPost :: error", error);
            return false;
        }
    }

    async deleteFile(fileId)
    {
        try {
            await this.bucket.deleteFile({
                bucketId: config.appwriteBucketId,
                fileId
            })
            return true;
        } catch (error) {
            console.log("Appwrite service :: createPost :: error", error)
        }
    }

    getFilePreview(fileId) {
        return this.bucket.getFilePreview({
            bucketId: config.appwriteBucketId,
            fileId
        }
        )
    }
}


const service = new Service();
export default service