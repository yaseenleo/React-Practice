function searchData(text) {
    return new Promise((resolve, reject) => {
        fetch('https://hn.algolia.com/api/v1/search?query=' + text)
        // fetch('all_posts')
        .then(res => res.json())
        .then(res => {
            //All Posts with user_id
            // var posts = [{user_id, title}, {user_id, title}, {user_id, title}]

            // var arr = []
            // posts.map((item, index) => {
            //     // item.user_id
            //     console.log(index);
            //     fetch('get_user?user_id=' + item.user_id)
            //     .then(res => res.json())
            //     .then(res => {
            //         //user information
            //         // console.log(res);
            //         // arr[index]
            //     })
            // })

            resolve(res.hits);
        }).catch(e => {
            reject({message: "Something Went Wrong..."})
        }) 
    })
}

//for returning asynchronous(request/response) 
//response from a function

export {
    searchData
}