function nameValidation(name) {
    if (!name || name.length < 1) {
      return false;
    }
  
    if (name.length > 4) {
      // TODO! 이름 길이 제한 기준 설정 필요
      return false;
    }
  
    // TODO! [,],\ 입력 방지 필요
    const regex = /[0-9|a-z|A-Z|ㄱ-ㅎ|ㅏ-ㅣ|`~!@#$%^&*()_|+\-=?;:'",.<>{}/ ]/;
    if (regex.exec(name) !== null) {
      return false;
    }
    return true;
  }

  const global = {
    nameValidation,
  }
  
export default global