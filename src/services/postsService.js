const TOKEN = 'Bearer 84_noDIa3moP5sAWuq5oWt1Mr5uW8EPrSx4zhkT2GNM'
const ORIGIN = 'https://033bad1b-c8e2-4ee5-b8f8-f4c19c33ca37.ctfcloud.net'
const URL = 'https://graphql.contentful.com/content/v1/spaces/ttnwicrfoj6w/environments/master'
const REQUEST = `
{
  postCollection {
    items {
      sys {
        id
      }
			excerpt
			title
			headerPicture {
			  url
				fileName
			}
			author {
				name
				email
			}
			
      # add the fields you want to query
    }
  }
}
`
function _makePostDetailsRequest(postId) {
    return `
    query {
	post(id:"${postId}") {
		sys {
        id
      }
			excerpt
			title
			headerPicture {
			  url
				fileName
			}
			author {
				name
				email
			}
		  content {
				json
			}
	}
}   
`

}


async function _fetch(request) {
    const result = await fetch(
        URL,
        {
            method: 'POST',
            headers: {
                Authorization: TOKEN,
                Origin: ORIGIN,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({query: request})
        }
    )
    
    const data = await result.json();
    return data;
} 

async function fetchPostsList() {
    const data = await _fetch(REQUEST);

    const blogItems = data.data.postCollection.items.map((rec) => ({
        id: rec.sys.id,
        author: rec.author,
        excerpt: rec.excerpt,
        headerPictureUrl: rec.headerPicture.url,
        title: rec.title 
    }))
    return blogItems;
}

async function fetchBlogPostDetails(postId) {
    const data = await _fetch(_makePostDetailsRequest(postId))
    console.log(data)
    return {
        id: data.data.post.sys.id,
        author: data.data.post.author,
        excerpt: data.data.post.excerpt,
        headerPictureUrl: data.data.post.headerPicture.url,
        title: data.data.post.title,
        contentJson: data.data.post.content.json 
    }
}

export {
    fetchPostsList,
    fetchBlogPostDetails
}
