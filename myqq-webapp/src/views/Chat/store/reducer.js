// 在此处编写业务逻辑并导出
import { produce } from 'immer'
// 导入动作
import { actionType } from './index'
// 初始值
const initialState = {
    // 对方userID
    target: '',
    targetDetail: {
        userID: '',
        avator: '',
        signature: '',
        nickName: '',
        birthday: '',
        gender: 1
    },
    messageList: [],
    unReadMessageList: {},
    friendList: []
}
// 编写reducer
const ChatReducer = (state = initialState, action) => {
    return produce(state, (draft) => {
        switch (action.type) {
            case actionType.TARGET:
                draft.target = action.data;
                break;
            case actionType.TARGETDETAIL:
                draft.targetDetail = action.data;
                break;
            case actionType.MESSAGELIST:
                draft.messageList = action.data;
                break;
            case actionType.INSERTONEROWMESSAGELIST:
                draft.messageList.push(action.data)
                break;
            case actionType.UNREADMESSAGELIST:
                draft.unReadMessageList = action.data;
                break;
            case actionType.CHANGECOUNT:
                {
                    const { target, count } = action.data;
                    draft.unReadMessageList[target].count = count;
                }
                break;
            case actionType.CHANGELASTMESSAGE:
                {
                    const { target, lastMessage, messageType } = action.data;
                    draft.unReadMessageList[target].lastMessage = lastMessage;
                    draft.unReadMessageList[target].messageType = messageType;
                    draft.unReadMessageList[target].messageValue = messageType;
                }
                break;
            default:
                break;
        }
    })
}
export { ChatReducer }