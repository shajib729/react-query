import React, { Fragment, useCallback, useEffect } from 'react'
import { useInfiniteQuery } from 'react-query'
import axios from 'axios'
import {Post, PostSkeleton} from './Post'

const InfinitePaginationPage = () => {
  
  const fetchData = (pageParam) => {
    return new Promise((resolve) => setTimeout(() => resolve(axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=20&_page=${pageParam}`)), pageParam==1?2000:1000))
  }

  // Data is fetched from the API by react-query
  const { data, isLoading,isError, error, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage } = useInfiniteQuery( 
    'datas', 
    ({pageParam=1})=>fetchData(pageParam), {
      getNextPageParam: (_lastPage, pages) => pages.length<5?pages.length+1:undefined
    }
  )

  // Infinite Scrolling Data Fetching
  useEffect(()=>{
    // after scrolling to the bottom of the page, fetch the next page
    const onScroll=(e)=>{
      const {scrollHeight, scrollTop, clientHeight} = e.target.scrollingElement
      if(scrollHeight - scrollTop <= clientHeight*1.3 && hasNextPage && !isFetchingNextPage){
        fetchNextPage()
      }
    }

    document.addEventListener('scroll', onScroll)
    return ()=>document.removeEventListener('scroll', onScroll)
  },[isFetching])
  
  // render the error message
  if(isError) {
    return <h2>Error : {error.message}</h2>
  }
  
  // render the data
  return (
      <>
        <div>
          <h1 style={{textAlign:'center'}}>Infinite Scroll Post</h1><br/><br/>

          {
            isLoading ?
            <PostSkeleton/>
            :
            data?.pages?.map((group, i) => {
              return (
                <Fragment key={i}>
                  {group.data.map((post, index) => (
                    <div key={index}>
                      <Post post={post}/>
                    </div>
                  ))}
                </Fragment>
              )
            })
          }
        </div>
        <div>{isFetchingNextPage ? <PostSkeleton/> : null}</div>
      </>
    )
  }

export default InfinitePaginationPage