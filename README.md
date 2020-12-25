# mpesa-self-service-portal
Este programa foi concebido apenas para efeitos de demonstração de um Portal web que permite aos clientes efecturarem um auto registo dos seus dados.
As requisições que este programa faz são enviadas para uma VPS que contém a aplicação de Backend.


Instalação
==========
Para fazer uso deste programa basta apenas clonar ou fazer download deste repositorio e executar o fixeiro ```index.html```. Todos os dados submetidos são enviados para o backend que faz o registo e verificação de dados. 



Demo links
==========
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

````
 axios.post('http://67.205.171.20/admin-dashboard/public/api/create', {
        input_name: input_name,
        input_surname: input_surname,
        input_dob: input_dob,
        input_phone: input_phone,
        input_docType: input_docType,
        input_docNumber: input_docNumber
    })
        .then(function (response) {
            if (status === 200) {
                console.log(response)
            }
        })
        .catch(function (error) {
          console.log(error)

        });
