// eslint-disable-next-line import/no-anonymous-default-export
export default (state=false,action) => {
    switch(action.type)
    {
        case "meetCreator":
            return {
                meetingCreated:action.payload
            };
            default:
                return state;
    }
};