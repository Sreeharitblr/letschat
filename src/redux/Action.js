export const reseverData = (data)=> {
    return {
        type: 'chat/reseve',
        payload: data
      };
}
export const sendData = (sendmessage)=> {
    return {
        type: 'chat/send',
        payload: sendmessage
      };
}