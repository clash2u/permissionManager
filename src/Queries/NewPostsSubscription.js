import gql from 'graphql-tag';

export default gql`
    subscription NewPostSub {
    newPost {
        __typename
        id
        title
        author
        version
    }
}`;