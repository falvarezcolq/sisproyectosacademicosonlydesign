import React from "react";
import Config from "../utils/Config";

class ProjectsComponent extends React.Component {
  constructor(props) {
    super(props);
  }
 
  state = {
    tutors:[
      {
        projectName:"Ganancia de un microempresario",
        periord:"I/2020",
        state:2,
        avances:"5",
        tutor_review:"4",
        comments:"43"
      },
      {
        projectName:"Ganancia de un microempresario",
        periord:"I/2020",
        state:3,
        avances:"5",
        tutor_review:"4",
        comments:"43"
      },
      {
        projectName:"Ganancia de un microempresario",
        periord:"I/2020",
        state:4,
        avances:"5",
        tutor_review:"4",
        comments:"43"
      },
      {
        projectName:"Ganancia de un microempresario",
        periord:"I/2020",
        state:5,
        avances:"5",
        tutor_review:"4",
        comments:"43"
      },
      {
        projectName:"Ganancia de un microempresario",
        periord:"I/2020",
        state:1,
        avances:"5",
        tutor_review:"4",
        comments:"43"
      },

          ]
  }


  getState = (state)=>{
    if(state==1){
      return <span class="label bg-green">Concluido</span>;
    }else if(state==2){
      return <span class="label bg-blue">En proceso</span>;
    }else if(state==3){
      return <span class="label bg-light-blue">Revision</span>;
    }else if(state==4){
      return <span class="label bg-orange">sin avance</span>;
    }else if(state==5){
      return <span class="label bg-red">Abandonado</span>;
    }else {
      return ""
    }
  } 


  getTypeProyect = (typeProject)=>{
    if(typeProject==1){
      return <span class="font-bold col-green">Articulo</span>;
    }else if(typeProject==2){
      return <span class="font-bold col-blue">Tesis</span>;
    }else if(typeProject==3){
      return <span class="font-bold col-light-blue">Proyecto de grado</span>;
    }else if(typeProject==4){
      return <span class="font-bold col-orange">Plan de negocio</span>;
    }else if(typeProject==5){
      return <span class="font-bold col-red">Trabajo dirigido</span>;
    }else {
      return ""
    }
  }

  render() {
    return (
      <section className="content">
        <div className="container-fluid">
          <div className="block-header">
            <h2>Proyectos academicos</h2>
          </div>
       
          <div className="row clearfix">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div class="card">
                        <div class="header">
                            <h2>
                                Proyectos academicos 
                                <small>652 estudiantes</small>
                               
                            </h2>

                            <ul class="header-dropdown m-r--5"> 
                                <li>
                                  <button className="btn btn-primary"> Nuevo</button>
                                </li>
                                <li class="dropdown m-l-10">
                                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                        <i class="material-icons">more_vert</i>
                                    </a>
                                    <ul class="dropdown-menu pull-right">
                                        <li><a href="#" class=" waves-effect waves-block">Action</a></li>
                                        <li><a href="#" class=" waves-effect waves-block">Another action</a></li>
                                        <li><a href="#" class=" waves-effect waves-block">Something else here</a></li>
                                    </ul>
                                </li>

                            </ul>

                          
                            <label>
                              Buscar:
                              <input type="search" class="form-control input-md" placeholder="" aria-controls="DataTables_Table_0"/>
                              </label>
                                 
                        </div>
                        <div class="body table-responsive">
                            <table class="table table-hover">
                                <thead>
                                    <tr>
                                      
                                        <th>Proyecto</th>
                                        <th>Periodo</th>
                                        <th>estado</th>
                                        <th>Avances</th>
                                        <th>Accion</th>
                                    </tr>
                                </thead>
                                <tbody>
                                  {this.state.tutors.map((item)=>(
                                    <tr>
                                      
                                      
                                      <td>{item.projectName}</td>
                                      <td>{item.periord}</td>
                                      <td>{this.getTypeProyect(item.state)}</td>
                                      <td>{item.avances}</td>
                                      <td>{item.tutor_review}</td>
                                      <td>{item.comments}</td>
                                      <td>
                                        <a href={Config.aProjectsUrl + "/465"} className="btn btn-succes" >ver</a>
                                      </td>
                                     
                                      
                                    </tr>
                                  ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
            </div>
          </div>

        </div>
      </section>
      // <h1>hola</h1>
    );
  }
}

export default ProjectsComponent;
