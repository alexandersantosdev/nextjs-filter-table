import Head from "next/head";
import { useState } from "react";

export default function Home({ employees }) {
  const [employeesList] = useState(employees.data);
  const [filteredEmployees, setFilteredEmployees] = useState(employees.data);

  const handleFilter = (filtro) => {
    const filtered = employeesList.filter(
      (e) =>
        e.employee_name.toLowerCase().includes(filtro) ||
        String(e.employee_salary).includes(filtro) ||
        String(e.employee_age).includes(filtro) ||
        String(e.id).includes(filtro)
    );
    setFilteredEmployees(filtered);
  };

  return (
    <div className="container">
      <Head>
        <title>Projetinho de filtro dinâmico de dados em tabela</title>
        <meta
          name="description"
          content="Projetinho de filtro dinâmico de dados em tabela, usando nextjs e javascript"
        />
        <meta name="author" content="Alexander Roberto dos Santos" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x"
          crossorigin="anonymous"
        />
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4"
          crossorigin="anonymous"
        ></script>
      </Head>
      <div className="container">
      <h1 className="text-center mt-5">Projeto filtro em tabela com dados de requisição web</h1>
      <br/>
      <p className="text-center">Utilizado: Nextjs com <code>getServerSideProps</code>, hook <code>useState</code> do React, <code>fetch</code> e <code>filter</code> do javascript e bootstrap para estilizar</p>
      <p className="text-center">Os dados são baixados uma única vez no carregamento da página através da função <code>getServerSideProps</code> e armazenados num array principal e num auxiliar. Os filtros
      são realizados no array auxiliar com base nos dados do array principal. A tabela é gerada dinamicamente com os dados do array auxiliar, filtrado ou não (após 1º carregamento).      </p>
      
        <input onChange={(e) => handleFilter(e.target.value)} className="form-control" placeholder="Filter by employee id, name, salary or age"/>
      </div>
      <div>
        <table className="table table-striped table-hover">
          <thead>
            <th>ID</th>
            <th>Name</th>
            <th>Salary USD</th>
            <th>Age</th>
          </thead>
          <tbody>
            {filteredEmployees.map((e) => {
              return (
                <tr>
                  <td>{e.id}</td>
                  <td>{e.employee_name}</td>
                  <td>${e.employee_salary}</td>
                  <td>{e.employee_age}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const response = await fetch(
    "http://dummy.restapiexample.com/api/v1/employees/"
  );
  const employees = await response.json();

  return {
    props: { employees },
  };
}
