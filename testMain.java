/**
 * Created by arturo.galan on 22/6/17.
 */
public class testMain {
    public static void main(String[] args) {

        System.out.println(pruebas());

    }


    private static String pruebas(){
        String path = "otra/cosa/distinta";
        if (path != null) {
            int jbSlashIndex = path.lastIndexOf("jb/");
            int execSlashIndex = path.lastIndexOf("/execute");
            if (jbSlashIndex > 0 && execSlashIndex > 0) {
                return path.substring(jbSlashIndex+3,execSlashIndex);
            }
            return path;

        }

        return "";
    }
}
