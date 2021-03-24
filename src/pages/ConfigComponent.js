import React from "react";

class ConfigComponent extends React.Component {
  constructor(props) {
    super(props);
  }
 
  state = {
    tutors:[
      {
        period:"I/2020",
        description:"Primer semestre 2020",
        students:2,
        prjects:3,
      },
      {
        period:"II/2019",
        description:"Primer semestre 2020",
        students:2,
        prjects:3,
      },
      {
        period:"I/2019",
        description:"Primer semestre 2020",
        students:2,
        prjects:3,
      },
      {
        period:"II/2018",
        description:"Primer semestre 2018",
        students:2,
        prjects:3,
      },

          ],
    modalities:[
      {
        modality:"Tesis",
        description: "",
        current_rule: "reglamento_tesis_de_grado_v20200229",
        entrega_de_avance:"bi-mestral",
        revisores:"tutor, dirección de carrera",
      },
      {
        modality:"Proyecto de grado",
        description: "",
        current_rule: "reglamento_proyecto_de_grado_v20200229",
        entrega_de_avance:"mensual",
        revisores:"tutor, dirección de carrera",
      },
      {
        modality:"Proyecto de grado (plan de negocio)" ,
        description: "",
        current_rule: "reglamento_proyecto_de_grado_plan_v20200229",
        entrega_de_avance:"mensual",
        revisores:"tutor, dirección de carrera",
      },
      {
        modality:"Trabajo dirigido",
        description: "",
        current_rule: "reglamento_proyecto_de_grado_v20200229",
        entrega_de_avance:"mensual",
        revisores:"tutor, dirección de carrera, institución",
      },
      {
        modality:"Por excelencia (Artículo científico)",
        description: "",
        current_rule: "reglamento_proyecto_de_grado_v20200229",
        entrega_de_avance:"trimestral",
        revisores:"tutor, dirección de carrera, institución",
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
            <h2>Configuración</h2>
          </div>
       
          <div className="row clearfix">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div class="card">
                        <div class="header">
                            <h2>
                                Periodos academicos academicos 
                            
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

         
                        </div>
                        <div class="body table-responsive">
                            <table class="table table-hover">
                                <thead>
                                    <tr>
                                      
                                      
                                        <th>Periodo académico</th>
                                        <th>Descripcion</th>
                                        <th># de estudiante inscritos</th>
                                        <th># proyectos finalizados</th>
                                        <th>Accion</th>
                                    </tr>
                                </thead>
                                <tbody>
                                  {this.state.tutors.map((item)=>(
                                    <tr>
                               
                                      <td>{item.period}</td>
                                      <td>{item.description}</td>
                                      <td>{item.students}</td>
                                      <td>{item.prjects}</td>
                                    
                                      <td>
                                        <button className="btn btn-primary">Editar</button>
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
            </div>
          </div>

          
<div className="row clearfix">
<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
<div class="card">
            <div class="header">
                <h2>
                    Modalidades de graduacion
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


            </div>
            <div class="body table-responsive">
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th>Modalidad de graduacion</th>
                            <th>descripción</th>
                            <th>reglamento</th>
                            <th>tipo de avance</th>
                            <th>Evaluadores</th>
                        </tr>
                    </thead>
                    <tbody>
                      {this.state.modalities.map((item)=>(
                        <tr>
                          <td>{item.modality}</td>
                          <td>{item.description}</td>
                          <td>{item.current_rule}</td>
                          <td>{item.entrega_de_avance}</td>
                          <td>{item.revisores}</td>
                          <td>
                            <button className="btn btn-primary">Editar</button>
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

export default ConfigComponent;
