let message = (prompt("Введіть пароль"));
const ADMIN_PASSWORD = 'jqueryismyjam'; 
if(message === null){
    alert("Операцію скасовано");
} else if (message === ADMIN_PASSWORD){
    alert("Ласкаво просимо!");
} else {
    alert('Доступ заборонено, невірний пароль!' );
}
