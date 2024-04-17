import { useGetPostsByIdQuery, useGetPostsQuery } from "../../redux/features/api/baseApi";



const Feed = () => {

    // redux hook
    const { data: posts, isLoading, isError, error } = useGetPostsQuery(); // This returns an object
    // const { data: posts, isLoading, isError, error } = useGetPostsByIdQuery(10);

    console.log(posts)



    return (
        <div className="px-8">
            <h2 className="text-4xl font-semibold text-center">Feed here</h2>

            <div className="grid grid-cols-3 justify-center items-stretch gap-8 my-12">
                {
                    isLoading ? <p className="text-5xl font-semibold">Loading....</p>
                        :
                        posts.map(post =>
                            <div
                                key={post.id}
                                className="border border-[#d3d3d3] hover:shadow-xl duration-500 p-7 flex flex-col justify-start items-start rounded-xl gap-3"
                            >
                                <p>Post: {post.id}</p>
                                <h3 className="text-2xl font-semibold text-black">{post.title}</h3>
                                <p className="text-body">
                                    {post.body}
                                </p>
                            </div>)

                }
            </div>
        </div>
    );
};

export default Feed;