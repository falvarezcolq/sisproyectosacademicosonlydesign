import React from "react";

import CanvasJSReact from "../utils/canvasjs.react";
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class HomeComponent extends React.Component {
    constructor(props){
        super(props)
        this.chart = React.createRef()
        this.options = {
			animationEnabled: true,
			exportEnabled: true,
			theme: "light1", // "light1", "dark1", "dark2"
			title:{
				text: "Proyectos academicos"
			},
			data: [{
				type: "pie",
				indexLabel: "{label}: {y}%",		
				startAngle: -90,
				dataPoints: [
					{ y: 20, label: "Tesis" },
					{ y: 24, label: "Proyecctos de grado" },
					{ y: 20, label: "Planes de negocio" },
					{ y: 14, label: "Trabajo dirijido" },
					{ y: 12, label: "Articulos cientificos" },
					{ y: 10, label: "Otros" }	
				]
			}]
		}

        this.options2 = {
            animationEnabled: true,	
            title:{
                text: "Número de estudiantes"
            },
            axisY : {
                title: "Número de tutores"
            },
            toolTip: {
                shared: true
            },
            data: [{
                type: "spline",
                name: "2016",
                showInLegend: true,
                dataPoints: [
                    { y: 155, label: "Jan" },
                    { y: 150, label: "Feb" },
                    { y: 152, label: "Mar" },
                    { y: 148, label: "Apr" },
                    { y: 142, label: "May" },
                    { y: 150, label: "Jun" },
                    { y: 146, label: "Jul" },
                    { y: 149, label: "Aug" },
                    { y: 153, label: "Sept" },
                    { y: 158, label: "Oct" },
                    { y: 154, label: "Nov" },
                    { y: 150, label: "Dec" }
                ]
            },
            {
                type: "spline",
                name: "2017",
                showInLegend: true,
                dataPoints: [
                    { y: 172, label: "Jan" },
                    { y: 173, label: "Feb" },
                    { y: 175, label: "Mar" },
                    { y: 172, label: "Apr" },
                    { y: 162, label: "May" },
                    { y: 165, label: "Jun" },
                    { y: 172, label: "Jul" },
                    { y: 168, label: "Aug" },
                    { y: 175, label: "Sept" },
                    { y: 170, label: "Oct" },
                    { y: 165, label: "Nov" },
                    { y: 169, label: "Dec" }
                ]
            }]
    }
    }
    render() {

       
    return (
      <section className="content">
        <div className="container-fluid">
          <div className="block-header">
            <h2>Escritorio</h2>
          </div>
          <div className="row clearfix">
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div className="info-box bg-pink hover-expand-effect">
                <div className="icon">
                  <i className="material-icons">playlist_add_check</i>
                </div>
                <div className="content">
                  <div className="text">Proyectos academicos</div>
                  <div
                    className="number count-to"
                    data-from="0"
                    data-to="125"
                    data-speed="15"
                    data-fresh-interval="20"
                  >
                    125
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div className="info-box bg-cyan hover-expand-effect">
                <div className="icon">
                  <i className="material-icons">help</i>
                </div>
                <div className="content">
                  <div className="text">Nro de tutores</div>
                  <div
                    className="number count-to"
                    data-from="0"
                    data-to="257"
                    data-speed="1000"
                    data-fresh-interval="20"
                  >
                    257
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div className="info-box bg-light-green hover-expand-effect">
                <div className="icon">
                  <i className="material-icons">forum</i>
                </div>
                <div className="content">
                  <div className="text">Avances</div>
                  <div
                    className="number count-to"
                    data-from="0"
                    data-to="243"
                    data-speed="1000"
                    data-fresh-interval="20"
                  >
                    243
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div className="info-box bg-orange hover-expand-effect">
                <div className="icon">
                  <i className="material-icons">person_add</i>
                </div>
                <div className="content">
                  <div className="text">Revisiones </div>
                  <div
                    className="number count-to"
                    data-from="0"
                    data-to="1225"
                    data-speed="1000"
                    data-fresh-interval="20"
                  >
                    1225
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row clearfix">
            {/* <!-- Task Info --> */}
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div className="card">
                <div className="header">
                  <h2>Tabla de proyectos</h2>
                  <ul className="header-dropdown m-r--5">
                    <li className="dropdown">
                      <a
                        href="#"
                        className="dropdown-toggle"
                        data-toggle="dropdown"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="material-icons">more_vert</i>
                      </a>
                      <ul className="dropdown-menu pull-right">
                        <li>
                          <a href="#" className=" waves-effect waves-block">
                            Action
                          </a>
                        </li>
                        <li>
                          <a href="#" className=" waves-effect waves-block">
                            Another action
                          </a>
                        </li>
                        <li>
                          <a href="#" className=" waves-effect waves-block">
                            Something else here
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div className="body">
                  <div className="table-responsive">
                    <table className="table table-hover dashboard-task-infos">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Titulo</th>
                          <th>Status</th>
                          <th>Tipo</th>
                          <th>Progreso</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>
                            TTu lista de tareas actual te dará una idea clara de
                            cuáles son tus proyectos actuales
                          </td>
                          <td>
                            <span className="label bg-green">Concluido</span>
                          </td>
                          <td>Proyecto de grado</td>
                          <td>
                            <div className="progress">
                              <div
                                className="progress-bar bg-green"
                                role="progressbar"
                                aria-valuenow="62"
                                aria-valuemin="0"
                                aria-valuemax="100"
                                style={{ width: "62%" }}
                              ></div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>
                            tienes que hacer sin saber muy bien cómo has llegado
                            a esa situación
                          </td>
                          <td>
                            <span className="label bg-blue">En proceso</span>
                          </td>
                          <td>Trabajo dirigido</td>
                          <td>
                            <div className="progress">
                              <div
                                className="progress-bar bg-blue"
                                role="progressbar"
                                aria-valuenow="40"
                                aria-valuemin="0"
                                aria-valuemax="100"
                                style={{ width: "40%" }}
                              ></div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>Task C</td>
                          <td>
                            <span className="label bg-light-blue">
                              En revision
                            </span>
                          </td>
                          <td>Trabajo dirijigo</td>
                          <td>
                            <div className="progress">
                              <div
                                className="progress-bar bg-light-blue"
                                role="progressbar"
                                aria-valuenow="72"
                                aria-valuemin="0"
                                aria-valuemax="100"
                                style={{ width: "72%" }}
                              ></div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>
                            proyectos no suele estar completa. Los coach de GTD{" "}
                          </td>
                          <td>
                            <span className="label bg-orange">
                              Wait Approvel
                            </span>
                          </td>
                          <td>(Plan de negocio)</td>
                          <td>
                            <div className="progress">
                              <div
                                className="progress-bar bg-orange"
                                role="progressbar"
                                aria-valuenow="95"
                                aria-valuemin="0"
                                aria-valuemax="100"
                                style={{ width: "95%" }}
                              ></div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>5</td>
                          <td>
                            Abierto a adquirir más compromisos de los
                            necesarios.
                          </td>
                          <td>
                            <span className="label bg-red">Suspended</span>
                          </td>
                          <td>Tesis (articulo)</td>
                          <td>
                            <div className="progress">
                              <div
                                className="progress-bar bg-red"
                                role="progressbar"
                                aria-valuenow="87"
                                aria-valuemin="0"
                                aria-valuemax="100"
                                style={{ width: "87%" }}
                              ></div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- #END# Task Info --> */}

          </div>

          
          <div className="row clearfix">
            {/* <!-- Browser Usage --> */}
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <div className="card">
                <div className="header">
                  <h2>Modalidades  de graduacion</h2>
                  <ul className="header-dropdown m-r--5">
                    <li className="dropdown">
                      <a
                        href="#"
                        className="dropdown-toggle"
                        data-toggle="dropdown"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="material-icons">more_vert</i>
                      </a>
                      <ul className="dropdown-menu pull-right">
                        <li>
                          <a href="#" className=" waves-effect waves-block">
                            Action
                          </a>
                        </li>
                        <li>
                          <a href="#" className=" waves-effect waves-block">
                            Another action
                          </a>
                        </li>
                        <li>
                          <a href="#" className=" waves-effect waves-block">
                            Something else here
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div className="body">
                  <CanvasJSChart
                    options={this.options}
                    // onRef={ref => this.chart = ref} 
                  />
                </div>
              </div>
            </div>
            
            {/* <!-- #END# Browser Usage --> */}

            <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
              <div className="card">
                <div className="header">
                  <h2>Tabla de Avances de proyectos</h2>
                  <ul className="header-dropdown m-r--5">
                    <li className="dropdown">
                      <a
                        href="#"
                        className="dropdown-toggle"
                        data-toggle="dropdown"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="material-icons">more_vert</i>
                      </a>
                      <ul className="dropdown-menu pull-right">
                        <li>
                          <a href="#" className=" waves-effect waves-block">
                            Action
                          </a>
                        </li>
                        <li>
                          <a href="#" className=" waves-effect waves-block">
                            Another action
                          </a>
                        </li>
                        <li>
                          <a href="#" className=" waves-effect waves-block">
                            Something else here
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div className="body">
                    <CanvasJSChart
                        options={this.options2}
                        // onRef={ref => this.chart = ref} 
                    />
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

export default HomeComponent;
