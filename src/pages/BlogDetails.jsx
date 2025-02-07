import { useParams } from "react-router-dom"
import { Image } from "react-bootstrap";
import useFetchBlogPostDetails from "../hooks/useFetchBlogPostDetails"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from "@contentful/rich-text-types";

export default function BlogDetails() {
    const renderOption = {
        renderNode: {
          [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
            return (<img
              src={`https:${node.data.target.fields.file.url}`}
              height={node.data.target.fields.file.details.image.height}
              width={node.data.target.fields.file.details.image.width}
              alt="??"
            />)
          }
        }
      }
     
    const {postId} = useParams()
    const {loading, error, blogDetails} = useFetchBlogPostDetails(postId);
    return (
        <>
            <h1>{blogDetails.title}</h1>
            <Image src={blogDetails.headerPictureUrl} />
            <div>
                {documentToReactComponents(blogDetails.contentJson)}
            </div>

        </>

    )
}