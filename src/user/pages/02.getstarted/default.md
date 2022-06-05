---
title: Get Started
---

# Library bauen
OpenSBPM:engine kann mit einfachen Schritten erstellt werden.
1. Das Git-Rpeository clonen
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
`org.opensbpm.engine.api.ModelService`-Instance gepsichert wird.
Beispiel mit Spring-Boot
```java

class EngineConfigurer{

    @Autowired
    private ModelService modelService;

    public void startup(){
        ProcessModel myModel = new ProcessModel().unmarshal(getClass().getResourceAsStream("/mymodel.xml"));
        modelService.save();
    }
}
```

# Modelle ausführen     
Die Processmodelle können dann mit `org.opensbpm.engine.api.EngineService` verwaltet werden.