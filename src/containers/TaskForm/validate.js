const validate = values => {
    const error = {};
    const {title, description} = values;
    if(title === null || typeof title === 'undefined'){
        error.title = 'Vui lòng nhập tiêu đề.';
    }else if(title.trim() && title.length < 5){
        error.title = 'Tiêu đề phải từ 5 ký tự';
    }
    if(!description){
        error.description = 'Vui lòng nhập mô tả.'
    }
    return error;
}

export default validate;