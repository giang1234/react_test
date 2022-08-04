import _ from 'lodash';
import { toast } from 'react-toastify';
// import i18n from 'src/assets/locales/i18n';

const fn = ({ actions, process = (p: any) => { }, ...options }) => {
  return (payload: any) => async (dispatch: any, getState: any, objDeps: any) => {
    const execute = async () => {
      const { startAction, successAction, failedAction } = actions;
      if (_.isFunction(startAction)) {
        dispatch(startAction(payload));
      }
      try {
        const result = await process({ payload, dispatch, getState });
        if (_.isFunction(successAction)) {
          dispatch(successAction({ result, params: payload }));
        }

        let onSuccess: any = null;
        if (options && options.onSuccess) {
          ({ onSuccess } = options);
        }
        if (_.isFunction(onSuccess)) {
          onSuccess({ dispatch, getState, params: payload, result, ...objDeps });
        }
        if (options?.successMessage) {
          toast.success(options?.successMessage);
        }

        return result;
      } catch (error) {
        // let onError: string = null;
        if (_.isFunction(failedAction)) {
          dispatch(failedAction({ error }));
        }
        //Show custom error
        if (options && options.onError) {
          toast.error(options?.errorMessage);
          return
        }

        // show error message from api response
        // let customMessage: string = null;
        if (error.response?.data?.message) {
          toast.error(error.response?.data?.message);
          return
        }

        if (error.response?.statusMessage) {
          toast.error(error.response?.statusMessage);
          return
        }
        // show error by status
        if (error.message === 'Network Error') {
          return null;
        }
        if (error.request) {
          toast.error(error.request.status);
          return
        }
        return null;
      }
    };
    return execute();
  };
};

export default fn;
