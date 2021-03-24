import React from "react";

class ProjectComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    project: {
      projectName: "Ganancia de un microempresario",
      period: "I/2020",
      author: "Univ Jorge ACARAPI",
      state: 2,
      avances: "5",
      tutor_review: "4",
      comments: "43",
    },
    progress: [],
  };

  getState = (state) => {
    if (state == 1) {
      return <span class="label bg-green">Concluido</span>;
    } else if (state == 2) {
      return <span class="label bg-blue">En proceso</span>;
    } else if (state == 3) {
      return <span class="label bg-light-blue">Revision</span>;
    } else if (state == 4) {
      return <span class="label bg-orange">sin avance</span>;
    } else if (state == 5) {
      return <span class="label bg-red">Abandonado</span>;
    } else {
      return "";
    }
  };

  getTypeProyect = (typeProject) => {
    if (typeProject == 1) {
      return <span class="font-bold ">Articulo</span>;
    } else if (typeProject == 2) {
      return <span class="font-bold ">Tesis</span>;
    } else if (typeProject == 3) {
      return <span class="font-bold">Proyecto de grado</span>;
    } else if (typeProject == 4) {
      return <span class="font-bold ">Plan de negocio</span>;
    } else if (typeProject == 5) {
      return <span class="font-bold ">Trabajo dirigido</span>;
    } else {
      return "";
    }
  };

  render() {
    return (
      <section className="content">
        <div className="container-fluid">
          <div className="block-header">
            <h2>Proyectos academicos: {this.state.project.projectName}</h2>
          </div>

          <div className="row clearfix">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div class="card">
                <div class="header bg-indigo">
                  <h1>Título: {this.state.project.projectName}</h1>
                  <h2>
                    {this.getTypeProyect(this.state.project.state)} {this.state.project.period}
                    <small>{this.state.project.author}</small>
                  </h2>

                  <ul class="header-dropdown m-r--5">
                    <li class="dropdown m-l-10">
                      <a
                        href="#"
                        class="dropdown-toggle"
                        data-toggle="dropdown"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i class="material-icons">more_vert</i>
                      </a>
                      <ul class="dropdown-menu pull-right">
                        <li>
                          <a href="#" class=" waves-effect waves-block">
                            Action
                          </a>
                        </li>
                        <li>
                          <a href="#" class=" waves-effect waves-block">
                            Another action
                          </a>
                        </li>
                        <li>
                          <a href="#" class=" waves-effect waves-block">
                            Something else here
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          
          </div>
          <div className="row clearfix">
            <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9">
              <div class="card">
                <div class="header">
                  
                  <h2>
                  <strong>4ta </strong> Entrega de avance  correspondiente al mes de  <strong>Abril</strong>
                    <br/>

                    <small>2 de abril 2020</small>
                  </h2>

                  <ul class="header-dropdown m-r--5">
                    <li class="dropdown m-l-10">
                      <a
                        href="#"
                        class="dropdown-toggle"
                        data-toggle="dropdown"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i class="material-icons">more_vert</i>
                      </a>
                      <ul class="dropdown-menu pull-right">
                        <li>
                          <a href="#" class=" waves-effect waves-block">
                            Action
                          </a>
                        </li>
                        <li>
                          <a href="#" class=" waves-effect waves-block">
                            Another action
                          </a>
                        </li>
                        <li>
                          <a href="#" class=" waves-effect waves-block">
                            Something else here
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div className="body">
                  
                  <i className="material-icons col-orange" >error_outline</i>
                  <span className="icon-name" style={{position:"relative",top:"-6px"}}>Dirección de carrera</span>
                  <br/>
                  <i className="material-icons col-green"  >done</i>
                  <span className="icon-name" style={{position:"relative",top:"-6px"}}>Revision de los tutores</span>
                  <br/>
                  <i className="material-icons col-green"  >done</i>
                  <span className="icon-name" style={{position:"relative",top:"-6px"}}>recomendación de los tutores</span>
                  <br/>
                  <i className="material-icons col-orange" >error_outline</i>
                  <span className="icon-name" style={{position:"relative",top:"-6px"}}>Informe de la institucion  <a href="#">...Subir informe</a></span>
                 
                  <br/>
                 

                </div>
              </div>
              <div class="card">
                <div class="header">
                  
                  <h2>
                  <strong>3ra </strong> Entrega de avance  correspondiente al mes de  <strong>Marzo</strong>
                    <br/>

                    <small>2 de marzo 2020</small>
                  </h2>

                  <ul class="header-dropdown m-r--5">
                    <li class="dropdown m-l-10">
                      <a
                        href="#"
                        class="dropdown-toggle"
                        data-toggle="dropdown"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i class="material-icons">more_vert</i>
                      </a>
                      <ul class="dropdown-menu pull-right">
                        <li>
                          <a href="#" class=" waves-effect waves-block">
                            Action
                          </a>
                        </li>
                        <li>
                          <a href="#" class=" waves-effect waves-block">
                            Another action
                          </a>
                        </li>
                        <li>
                          <a href="#" class=" waves-effect waves-block">
                            Something else here
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div className="body">
                  
                  <i className="material-icons col-green"  >done</i>
                  <span className="icon-name" style={{position:"relative",top:"-6px"}}>Dirección de carrera</span>
                  <br/>
                  <i className="material-icons col-green"  >done</i>
                  <span className="icon-name" style={{position:"relative",top:"-6px"}}>Revision de los tutores</span>
                  <br/>
                  <i className="material-icons col-green"  >done</i>
                  <span className="icon-name" style={{position:"relative",top:"-6px"}}>recomendación de los tutores</span>
                  <br/>
                  <i className="material-icons col-green"  >done</i>
                  <span className="icon-name" style={{position:"relative",top:"-6px"}}>Informe de la institucion  <a href="#">...Subir informe</a></span>
                 
                  <br/>
                 

                </div>
              </div>

              <div class="card">
                <div class="header">
                  
                  <h2>
                  <strong>2da </strong> Entrega de avance  correspondiente al mes de  <strong>Febrero</strong>
                    <br/>

                    <small>2 de febrero 2020</small>
                  </h2>

                  <ul class="header-dropdown m-r--5">
                    <li class="dropdown m-l-10">
                      <a
                        href="#"
                        class="dropdown-toggle"
                        data-toggle="dropdown"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i class="material-icons">more_vert</i>
                      </a>
                      <ul class="dropdown-menu pull-right">
                        <li>
                          <a href="#" class=" waves-effect waves-block">
                            Action
                          </a>
                        </li>
                        <li>
                          <a href="#" class=" waves-effect waves-block">
                            Another action
                          </a>
                        </li>
                        <li>
                          <a href="#" class=" waves-effect waves-block">
                            Something else here
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div className="body">
                  
                  <i className="material-icons col-green"  >done</i>
                  <span className="icon-name" style={{position:"relative",top:"-6px"}}>Dirección de carrera</span>
                  <br/>
                  <i className="material-icons col-green"  >done</i>
                  <span className="icon-name" style={{position:"relative",top:"-6px"}}>Revision de los tutores</span>
                  <br/>
                  <i className="material-icons col-green"  >done</i>
                  <span className="icon-name" style={{position:"relative",top:"-6px"}}>recomendación de los tutores</span>
                  <br/>
                  <i className="material-icons col-orange" >error_outline</i>
                  <span className="icon-name" style={{position:"relative",top:"-6px"}}>Informe de la institucion  <a href="#">...Subir informe</a></span>
                 
                  <br/>
                 

                </div>
              </div>
            
            </div>

            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
              <div class="card">
                  <div class="header">
                    
                    <h3>
                      Ultima entrega <strong>5 Marzo</strong> 
                      <br/>
                      <small>Observacion del tutor</small>
                    
                    </h3>

                    <ul class="header-dropdown m-r--5">
                      <li class="dropdown m-l-10">
                        <a
                          href="#"
                          class="dropdown-toggle"
                          data-toggle="dropdown"
                          role="button"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <i class="material-icons">more_vert</i>
                        </a>
                        <ul class="dropdown-menu pull-right">
                          <li>
                            <a href="#" class=" waves-effect waves-block">
                              Action
                            </a>
                          </li>
                          <li>
                            <a href="#" class=" waves-effect waves-block">
                              Another action
                            </a>
                          </li>
                          <li>
                            <a href="#" class=" waves-effect waves-block">
                              Something else here
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  <div className="body">
                    lorem Lorem Ipsum es simplemente el texto de relleno de las imprentas 
                    y archivos de texto. Lorem Ipsum  ..<a href="#">Ver</a>
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

export default ProjectComponent;
