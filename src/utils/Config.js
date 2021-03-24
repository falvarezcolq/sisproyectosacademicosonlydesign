class Config{
    
    // static loginUrl="http://127.0.0.1:8001/api/gettoken/"
    // static refreshApiUrl ="http://127.0.0.1:8001/api/refreshtoken/"
    // static UserApiUrl ="http://127.0.0.1:8001/api/users/"
    // static UserPictureApiUrl ="http://127.0.0.1:8001/api/userpictures/"
    // static OwnerApiUrl ="http://127.0.0.1:8001/api/owners/"
    // static SpeciesApiUrl ="http://127.0.0.1:8001/api/species/"
    // static BreedApiUrl ="http://127.0.0.1:8001/api/breeds/"
    // static AnimalApiUrl ="http://127.0.0.1:8001/api/animals/"
    // static AnimalPictureApiUrl ="http://127.0.0.1:8001/api/animalpictures/"
    // static TypeReportApiUrl ="http://127.0.0.1:8001/api/typereports/"
    // static ReportApiUrl ="http://127.0.0.1:8001/api/reports/"
    // static FileReportApiUrl ="http://127.0.0.1:8001/api/filereports/"
    // static ServiceApiUrl ="http://127.0.0.1:8001/api/services/"
    // static AttentionApiUrl ="http://127.0.0.1:8001/api/attentions/"
    // static MedicalHistoryApiUrl ="http://127.0.0.1:8001/api/medicalhistories/"

    
    static baseUrl="/"
    static logoutPageUrl="/logout";
    
    static aHomeUrl="/admin/home";
    
    static aInscriptionUrl                  ="/admin/inscripcion";
    static aInscriptionStudentsUrl          ="/admin/inscripcion/estudiantes";
    static aInscriptionStudentsProfileUrl   ="/admin/inscripcion/estudiantes/profile";
    static aInscriptionNewUrl               ="/admin/inscripcion/nuevo";
    static aTutorUrl                        ="/admin/tutores";
    static aTutorNewUrl                     ="/admin/tutores/nuevo";
    static aStudentsUrl                     ="/admin/estudiantes";
    static aStudentsNewUrl                  ="/admin/estudiantes/nuevo";
    static aProjectsUrl                     ="/admin/proyectos";
    static aConfigUrl                       ="/admin/config";
    static aPeriodsUrl                      ="/admin/periodo_academico";
    static aReportsUrl                      ="/admin/informes";

    static tHomeUrl="/tutor/home";
    static tStudentsUrl="/tutor/estudiantes";
    static tStudentAdvanceUrl="/tutor/estudiantes/avance";
    static tStudentAdvanceReportUrl="/tutor/estudiantes/avance/revision";
    static tProjectsUrl="/tutor/proyectosasignados";


    static shomeUrl="/student/home/actualproyecto";
    static sProjectUrl="/student/project";
    static sProjectRevisionsUrl="/student/project/revisions";
    static sNewAdvanceUrl="/student/project/nuevoavance";
 

    static sidebarItem=[
        {"index":"0","title":"Escritorio","url":this.aHomeUrl,"icon":"home"},
        {"index":"1","title":"Inscripción","url":this.aInscriptionUrl,"icon":"assessment"},
        {"index":"2","title":"Tutores","url":this.aTutorUrl,"icon":"accessibility"},
        {"index":"3","title":"Estudiantes","url":this.aStudentsUrl,"icon":"face"},
        {"index":"4","title":"Proyectos","url":this.aProjectsUrl,"icon":"class"},
        {"index":"5","title":"Configuracion","url":this.aConfigUrl,"icon":"settings"},
        {"index":"6","title":"Reportes","url":this.aReportsUrl,"icon":"account_balance"},
    ]

} 

export default Config;