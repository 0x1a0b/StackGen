---
title: "StackGen Generated Code"
cover: "https://www.jpl.nasa.gov/spaceimages/images/wallpaper/PIA17793-640x350.jpg"
author: "johnmcmahon"
needsAuth: false
url: /wth
slug: "ignite-generated-code"
date: "2018-10-19"
category: "StackGen"
tags:
    - ignite
    - v1
---

#### StackGen Generated Code: JSON Data Objects

The initial code generation step creates Java POJOs (Plain Old Java Objects) which
are annotated with JSONObject annotations that expose them to the REST api framework.

Here is a simple example:

```java
package io.starter.ignite.model.dao;

import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.time.OffsetDateTime;
import org.springframework.validation.annotation.Validated;
import javax.validation.Valid;
import javax.validation.constraints.*;

/**
 Account
 ############################### DO NOT EDIT: GENERATED FILE ##############################

    Generated by StackGen: http://starter.io/ignite
    Powered by Swagger Codegen: http://swagger.io

############################### DO NOT EDIT: GENERATED FILE ##############################
 */

@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2018-12-07T09:06:02.896-08:00")

public class Account {
// add the StackGen Annotations
  @JsonProperty("id")
  protected Long id = null;

// add the StackGen Annotations
  @JsonProperty("balance")
  protected Double balance = null;

...

  public Account id(Long id) {
    this.id = id;
    return this;
  }

   /**
   * Get id
   * @return id
  **/
  @ApiModelProperty(      value = "")
  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public Account balance(Double balance) {
    this.balance = balance;
    return this;
  }

   /**
   * Get balance
   * @return balance
  **/
  @ApiModelProperty(      value = "")
  public Double getBalance() {
    return balance;
  }

  public void setBalance(Double balance) {
    this.balance = balance;
  }

  public Account institutionName(String institutionName) {
    this.institutionName = institutionName;
    return this;
  }

...

  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Account account = (Account) o;
    return Objects.equals(this.id, account.id) &&
        Objects.equals(this.balance, account.balance)
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, balance, ...);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Account {\n");

    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    balance: ").append(toIndentedString(balance)).append("\n");
    ...
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(java.lang.Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }

}

```
As you can see, the generated code has the basic Java field definitions, annotated with "@JsonProperty()" to describe how the JSON mapping is to be handled.

Additionally there are convenience methods like toIndentedString and equals() that provide for smoother interaction with the JSON data.

* REST API definition [wikipedia](https://en.wikipedia.org/wiki/Representational_state_transfer)
