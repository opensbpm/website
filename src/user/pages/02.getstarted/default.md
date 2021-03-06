---
title: Get Started
---

# OpenSBPM:engine
Die **OpenSBPM:engine** wird mit Git verwaltet und ist auf 
[GitHub](https://github.com/opensbpm/engine) gehostet. 

# Library bauen
Die **OpenSBPM:engine** kann mit einfachen wenigen Schritten installiert werden.  
1. Das Git-Repository clonen
```shell
    git clone https://github.com/opensbpm/engine
```

2. In das Verzeichnis `engine` wechseln

3. `mvn install` ausführen

4. Die OpenSBPM:engine kann einfach als Maven-Dependency eingebunden werden
```xml
<dependency>
    <groupId>org.opensbpm.engine</groupId>
    <artifactId>core</artifactId>
    <version>0.1-SNAPSHOT</version>
</dependency>    
```

# Modelle deployen
OpenSBPM-Modelle müssen in der Engine gespeichert werden. Das geschieht indem 
ein `org.opensbpm.engine.xmlmodel.ProcessModel` in einer 
`org.opensbpm.engine.api.ModelService`-Instance gespeichert wird.

Beispiel mit Spring-Boot:
```java

class EngineConfigurer{

    @Autowired
    private ModelService modelService;

    public void startup(){
        InputStream modelStream = getClass().getResourceAsStream("/mymodel.xml");
        ProcessModel myModel = new ProcessModel().unmarshal(modelStream);
        modelService.save(myModel);
    }
}
```

Beispielmodelle sind unter [OpenSBPM:engine Examples](https://github.com/opensbpm/engine/tree/main/examples/src/main/resources/org/opensbpm/engine/examples)
zu finden.

# Modelle ausführen     
Die Prozessmodelle können dann mit `org.opensbpm.engine.api.EngineService` 
verwaltet werden.
