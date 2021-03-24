import React from "react";

class TutorsExternalComponent extends React.Component {
  constructor(props) {
    super(props);
  }
 
  state = {
    tutors:[
      {
        fullName:"Perez Juan",
        finished:1,
        on_develop:1,
        not_concluded:2,
        total:4,
        current_projects:2,
        percent:10
      },

      {
        fullName:"Perez Ronald",
        finished:32,
        on_develop:123,
        not_concluded:23,
        total:44,
        current_projects:2,
        percent:70
      },

      {
        fullName:"Nicolaz Juan",
        finished:112,
        on_develop:1123,
        not_concluded:221,
        total:4,
        current_projects:333,
        percent:50
      },

      {
        fullName:"Beltran Gutierres Juan",
        finished:132,
        on_develop:13,
        not_concluded:254,
        total:423,
        current_projects:232,
        percent:30
      },

      {
        fullName:"Elizardo Mamanni Juan",
        finished:1,
        on_develop:231,
        not_concluded:32,
        total:423,
        current_projects:25,
        percent:90
      },

      {
        fullName:"Chungara Crespo Juan",
        finished:1,
        on_develop:1,
        not_concluded:2,
        total:4,
        current_projects:2,
        percent:10
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
            <h2>Tutores</h2>
          </div>
       
          <div className="row clearfix">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div class="card">
                        <div class="header">
                            <h2>
                                TUTORES DE LOS PROYECTOS (Tutor externos)
                                <small>8 Tutores, 5 doctores, 2 magister, 1 licenciados, 0 otros</small>
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
                                        <th>Apellidos y Nombres</th>
                              
                                        <th>Total</th>
                                        <th>Proyectos <br/> actuales</th>
                                        <th>Avances</th>
                                    </tr>
                                </thead>
                                <tbody>
                                  {this.state.tutors.map((item)=>(
                                    <tr>
                                      
                                      <td>{item.fullName}</td>
                                      <td>{item.total}</td>
                                      <td>{item.current_projects}</td>
                                      <td>
                                        <div class="progress">
                                          <div class="progress-bar bg-orange" 
                                              role="progressbar" 
                                              aria-valuenow="62" 
                                              aria-valuemin="0" 
                                              aria-valuemax="100" 
                                              style={{width:item.percent+"%"}}>
                                            </div>
                                          </div>
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

export default TutorsExternalComponent;
