<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
  <html>
  <body>
  <h2>Furniture Information</h2>
  <table border="1">
    <tr bgcolor="#9acd32">
      <th style="text-align:left">f_id</th>
      <th style="text-align:left">f_type</th>
      <th style="text-align:left">f_woodtype</th>
      <th style="text-align:left">f_description</th>
      <th style="text-align:left">f_color</th>
      <th style="text-align:left">f_price</th>
    </tr>
    <xsl:for-each select="furniture/information">
       <xsl:sort select="f_type"/>
    <xsl:if test="price>10000">
    <tr>
       <xsl:choose>
         <xsl:when test="f_id > 3284">
          <td bgcolor="ff00ff">
            <xsl:value-of select="f_id"/>
          </td>
         </xsl:when>
         <xsl:otherwise>
           <td>
             <xsl:value-of select="f_id"/>
           </td>
         </xsl:otherwise>
       </xsl:choose>
      <td><xsl:value-of select="f_id"/></td>
      <td><xsl:value-of select="f_type"/></td>
      <td><xsl:value-of select="f_woodtype"/></td>
      <td><xsl:value-of select="f_description"/></td>
      <td><xsl:value-of select="f_color"/></td>
      <td><xsl:value-of select="f_price"/></td>
    </tr>
    </xsl:if>
    </xsl:for-each>
  </table>
  </body>
  </html>
</xsl:template>
</xsl:stylesheet>