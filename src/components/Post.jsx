import React from 'react'
import '../styles/Post.css'

const Post = ({post}) => {
  return (
    <>
    <div className='post_card'>
        <div className='post_card_header'>
            <div className='post_left'>
                <div className='post_owner_img'></div>
            </div>
            <div className='post_card_right'>
                <div className='post_owner_name'>
                    <span>Mohammed Sajidul Islam</span>
                </div>
                <div className='post_date'>
                    <span>5th July, 2021</span>
                </div>
            </div>
        </div>
        <div className="post_title">
            {post.id}. {post.title}
        </div>
        <div className="post_body">
            {post.body}
        </div>
    </div>
    </>
  )
}

// PostSkeleton
const PostSkeleton = () => {
    return (
    <>
        <div className='post_skeleton_card'>
            <div className='post_skeleton_card_header'>
                <div className='post_skeleton_left'>
                    <div className='post_skeleton_owner_img skeleton_effect'></div>
                </div>
                <div className='post_skeleton_card_right'>
                    <div className='post_skeleton_owner_name skeleton_effect' />
                    <div className='post_skeleton_date skeleton_effect' />
                </div>
            </div>
            <div className="post_skeleton_title skeleton_effect" />
            <div className="post_skeleton_body skeleton_effect" />
        </div>
    </>
    )
}

export {Post, PostSkeleton}