import React from "react";
import appwriteService from "../appwrite/configure"
import {Link} from 'react-router-dom'

function PostCard({post}) {
    return (
        <Link to={`/post/${post.$id}`} >
            <div className='w-full bg-gray-100 rounded-xl p-4'>
                <div className="w-full justify-center mb-4">
                    {post.featuredImage &&
                        (
                            <img src={appwriteService.getFilePreview(post.featuredImage)} alt={post.title} />
                        )
                    }
                    
                </div>
                <h2 className="text-xl font-bold">{post.title}</h2>
            </div>
        </Link>
    )
}
export default PostCard