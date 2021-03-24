import React from "react";

class InscriptionComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    students:[
      {
        fullName:"Perez Juan",
        projectName:"Rubricas electronicas",
        typeProject:1,
        state:2,
      },
      {
        fullName:"Romero Juancho",
        projectName:"Faro de picos de estadisticos",
        typeProject:1,
        state:1,
      },
      {
        fullName:"Laura luisa",
        projectName:"Generacion de recursos ATM",
        typeProject:1,
        state:2,
      },
      {
        fullName:"Martin Peralesan",
        projectName:"Gerencia administrativa de ATM",
        typeProject:2,
        state:1,
      },
      {
        fullName:"Perez Juan",
        projectName:"Generacion de recursos ATM",
        typeProject:3,
        state:1,
      },
      {
        fullName:"Perez Juan",
        projectName:"Generacion de recursos ATM",
        typeProject:1,
        state:1,
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
            <h2>Inscripción</h2>
          </div>
       
          <div className="row clearfix">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div class="card">
                        <div class="header">
                            <h2>
                                ESTUDIANTES INSCRITOS
                                <small>245 estudiantes, 5 (plan de negocios)</small>
                            </h2>

                           

                            {/* <div class="dropdown-menu open" style="max-height: 281px; overflow: hidden; min-height: 92px;"><ul class="dropdown-menu inner" role="menu" style="max-height: 271px; overflow-y: auto; min-height: 82px;"><li data-original-index="0" class="selected"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">-- Please select --</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="1"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">10</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="2"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">20</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="3"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">30</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="4"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">40</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="5"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">50</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li></ul></div> */}

                            <ul class="header-dropdown m-r--5">
                                <li>
                                   <select class="form-control" style={{width:"200px"}} >
                                    <option value="">I/2020</option>
                                    <option value="">I/2020</option>
                                    <option value="">I/2020</option>
                                    <option value="">I/2020</option>
                                    <option value="">I/2020</option>
                                    <option value="">I/2020</option>
                                   </select>
                                  </li>
                                  
                                <li class="dropdown m-l-10">
                                    <a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                        <i class="material-icons">more_vert</i>
                                    </a>
                                    <ul class="dropdown-menu pull-right">
                                        <li><a href="javascript:void(0);" class=" waves-effect waves-block">Action</a></li>
                                        <li><a href="javascript:void(0);" class=" waves-effect waves-block">Another action</a></li>
                                        <li><a href="javascript:void(0);" class=" waves-effect waves-block">Something else here</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div class="body table-responsive">
                            <table class="table table-hover">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Apellidos y Nombres</th>
                                        <th>Proyecto</th>
                                        <th>Modalidad</th>
                                        <th>Estado</th>
                                        <th>Accion</th>
                                    </tr>
                                </thead>
                                <tbody>
                                  {this.state.students.map((item,index)=>(
                                    <tr>
                                      <td>{index+1}</td>
                                      <td>{item.fullName}</td>
                                      <td>{item.projectName}</td>
                                      <td>{this.getTypeProyect(item.typeProject)}</td>
                                      <td>{this.getState(item.state)}</td>
                                      <td><button class="btn btn-sm bg-orange">Ver</button></td>
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

export default InscriptionComponent;
