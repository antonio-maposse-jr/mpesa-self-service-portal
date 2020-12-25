# mpesa-self-service-portal
Este programa foi concebido apenas para efeitos de demonstração de um Portal web que permite aos clientes efecturarem um auto registo dos seus dados.
As requisições que este programa faz são enviadas para uma VPS que contém a aplicação de Backend.


Instalação
==========
Para fazer uso deste programa basta apenas clonar ou fazer download deste repositorio e executar o fixeiro ```index.html```. Todos os dados submetidos são enviados para o backend que faz o registo e verificação de dados. 



Demo
====
* Portal Web para M-Pesa self-registration portal: http://67.205.171.20/mpesa-self-service-portal/
* Painel Admin para M-Pesa self-registration portal: http://67.205.171.20/admin-dashboard/public/


Tecnologias Usadas
==================
* HTML
* CSS
* PHP (Backend)
* Laravel (Backend)
* MySQL (Backend)
* Javascript
* JQuery

Exemplo
=======

```javascript
 axios.post('http://67.205.171.20/admin-dashboard/public/api/create', {
        input_name: "Antonio",
        input_surname: "Maposse Jr.",
        input_dob: "1996-12-23",
        input_phone: "258841111111",
        input_docType: "BI",
        input_docNumber: "0101010101"
    })
        .then(function (response) {
            if (status === 200) {
                console.log(response)
            }
        })
        .catch(function (error) {
          console.log(error)
        });
```
