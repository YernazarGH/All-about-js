try{
    console.log('Hello');
    let user = {
        name: 'Yernazar',
        surname: 'Rakhimzhanov',
        age: 23
    };

    if(!user.name){ //если мы уберем в обьекте значения name то выведет ошибка
        throw new Error('В этих данных нет имени');
    };
} catch(error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);

    console.log(`Мы получили ошибку: ${error.name}`);
} finally {
    console.log('Я выполняюсь всегда');
};
console.log('Я работаю все раво хоть и выйдет ошибка');