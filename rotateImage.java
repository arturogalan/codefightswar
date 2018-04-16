import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by arturo.galan on 22/6/17.
 */
public class rotateImage {
    public static void main(String[] args) {


        int[][] a = {{1, 2, 3},
                {4, 5, 6},
                {7, 8, 9}};

       // System.out.println(rotateImage(a));
    }

    //mio
    /*private static int[][] rotateImage(int[][] image){

        int[][] rotateImage(int[][] image) {
            int [][] result = new int[image.length][image[0].length];
            int counterX=0;
            for (int i=image.length-1; i>=0; i--){
                int counterY=0;
                for (int number:image[i]){
                    result[counterY][counterX]=number;
                    counterY++;
                }
                counterX++;
            }
            return result;
        }
    }*/

    //Other
    int[][] rotateImage2(int[][] a) {

        int[][] newarr = new int[a.length][a[0].length];

        for(int j=0; j<a.length; j++)
        {
            for(int i=a.length-1 ; i>=0; i--)
            {
                newarr[j][a.length-1-i] = a[i][j];
            }
        }
        return newarr;
    }


    //other one
    int[][] rotateImage3(int[][] a)
    {
        int[][] result = new int[a[0].length][a.length];
        for(int i = 0; i < a.length; i++)
        {
            for(int j = 0; j < a[0].length; j++)
            {
                result[j][a.length-1-i] = a[i][j];
            }
        }
        return result;
    }
    

}
