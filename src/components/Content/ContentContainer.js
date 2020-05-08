
import { updatePostText, addPost, likeForPost, getUserDate } from '../../redux/Reducers/Profile-reducer';
import { connect } from 'react-redux';


import React from 'react';
import s from './Content.module.css'
import Profile from '../Profile/Profile';
// import NewPost from './NewPost/NewPost';
// import Post from './Post/Post';
import Preloader from '../common/Preloader/Preloader';
import { selectUser } from './../../redux/Reducers/Profile-reducer';
import { withRouter } from 'react-router-dom';




class Content extends React.Component {
    componentDidMount() {
        this.props.getUserDate(this.props.match, this.props.activeIDUser)
    }
    render() {
        return this.props.preloader ? <Preloader /> : <div className={s.wrapper}>
            <img className={s.back} alt="" src="https://www.mayak.zp.ua/images/stories/smi/zp-dk-zavodskiy.jpg" />
            <Profile className={s.Profile}
                user={this.props.selUser}
            />

            {/* <NewPost className={s.NewPost}
                addPost={this.props.addPost}
                updatePostText={this.props.updatePostText}
            /> */}
            {/* <div className={s.Post}>
                {this.props.arrPost.map(posts => <Post
                    posts={posts}
                    ProfileDate={this.props.ProfileDate}
                    likeForPost={this.props.likeForPost}
                />)
                }

            </div> */}
        </div>
    }

}
let withUrlData = withRouter(Content)
let mapStateToProps = (state) => {
    return {
        ProfileDate: state.common.ProfileDate,
        arrPost: state.ProfilePage.arrPost,
        activeIDUser: state.auth.activeIDUser,
        preloader: state.ProfilePage.preloader,
        selUser: state.ProfilePage.selectUser,

    }
}


export default connect(mapStateToProps, {
    addPost,
    updatePostText,
    likeForPost,
    selectUser,
    getUserDate,

})(withUrlData);