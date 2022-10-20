using System;

namespace marcostech.Inversora
{
    ///<Summary>Classe responsável por implementar a inversão do Array</Summary>
    public class Inversora
    {
        ///<param name="arrayRecebido">Recebe um array de inteiros int32</param>
        ///<returns>Retorna o array recebido invertido</returns>
        public static int[] InverterArray(int[] arrayRecebido) {
            Array.Reverse(arrayRecebido);
            return arrayRecebido;
        }
        
    }
}