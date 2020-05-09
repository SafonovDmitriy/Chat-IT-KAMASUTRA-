import SideBar from './SideBar.jsx';
import { updateUrlActive ,updateProfileURL} from '../../redux/Reducers/SideBar-reducer.js';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';



let mapStateToProps = (state) => {

  return {
    isAuth:state.auth.isAuth,
    activeDialog: state.auth.activeDialog,
    sideBar: state.sideBar.sideBarMenu,
    activeIDUser:state.auth.activeIDUser
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    updateUrlActive: (url) => dispatch(updateUrlActive(url)),
    updateProfileURL:(idUser)=>dispatch(updateProfileURL(idUser))
  }
}
let withUrlData = withRouter(SideBar)
export default connect(mapStateToProps, mapDispatchToProps)(withUrlData)