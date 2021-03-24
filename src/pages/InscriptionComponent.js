import React from "react";
import Config from "../utils/Config";

class InscriptionComponent extends React.Component {
  constructor(props) {
    super(props);
    this.chart = React.createRef();
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
                    <div className="header bg-blue">
                        <ul class="header-dropdown m-r-0">
                                <li>
                                    <a href="javascript:void(0);">
                                        <i class="material-icons">info_outline</i>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);">
                                        <i class="material-icons">help_outline</i>
                                    </a>
                                </li>
                            </ul>
                    </div>
                    <div class="body bg-blue">
                        <h2>
                            <a href={Config.aInscriptionStudentsUrl} style={{color:"white"}}>I/2021  <small>Periodo del primer semestre 2021  (actual)</small></a>
                        </h2>
                        
                    </div>
                </div>
            </div>
          </div>

          <div className="row clearfix">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div class="card">
                    <div class="body bg-blue-grey">
                        <h2>
                             <a href={Config.aInscriptionStudentsUrl} style={{color:"white"}}>II/2020 <small>Periodo del segundo semestre 2020</small></a>
                        </h2>
                    </div>
                </div>
            </div>
          </div>

          <div className="row clearfix">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div class="card">
                    <div class="body bg-blue-grey">
                        <h2>
                             <a href={Config.aInscriptionStudentsUrl} style={{color:"white"}}>I/2020 <small>Periodo del primer semestre 2020</small></a>
                        </h2>
                    </div>
                </div>
            </div>
          </div>

          <div className="row clearfix">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div class="card">
                    <div class="body bg-blue-grey">
                        <h2>
                             <a href={Config.aInscriptionStudentsUrl} style={{color:"white"}}>II/2019 <small>Periodo del segundo semestre 2019</small></a>
                        </h2>
                    </div>
                </div>
            </div>
          </div>
          <div className="row clearfix">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div class="card">
                    <div class="body bg-blue-grey">
                        <h2>
                             <a href={Config.aInscriptionStudentsUrl} style={{color:"white"}}>I/2019 <small>Periodo del primer semestre 2019</small></a>
                        </h2>
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
