import { connect } from 'react-redux';
import { actions } from 'src/store/auth';
import Main from './main';

const mapStateToProps = (state: any) => ({

});
const mapDispatchToProps = dispatch => ({
  login: async (data) => {
    return await Promise.all([
      dispatch(actions.login(data))
    ])
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
