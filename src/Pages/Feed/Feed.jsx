import { useGetPostsByIdQuery, useGetPostsQuery } from "../../redux/features/api/baseApi";



const Feed = () => {

    // redux hook
    const { data: posts, isLoading, isError, error } = useGetPostsQuery(); // This returns an object

    // dynamic data fetching
    // const { data: posts, isLoading, isError, error } = useGetPostsByIdQuery(10);



    return (
        <div className="px-8 bg-customBackground">
            <h2 className="text-4xl font-semibold text-white text-center">Feed here</h2>


            {/* new post form */}
            <form className="flex justify-center items-center gap-5 my-8">
                <input type="text" name="newPost" id="newPost" className="bg-customForeground px-4 py-2 rounded focus:outline-none w-2/4" />
                <input type="submit" value="Post" className="bg-primary text-white px-4 py-2 rounded" />
            </form>

            <div className="grid grid-cols-3 justify-center items-stretch gap-8 my-12">
                {
                    isLoading ? <p className="text-center text-5xl font-semibold text-customForeground">Loading....</p>
                        :
                        posts.slice(97).map(post =>
                            <div
                                key={post.id}
                                className="bg-customForeground shadow-black hover:shadow-2xl duration-500 p-7 flex flex-col justify-start items-start rounded-xl gap-3"
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