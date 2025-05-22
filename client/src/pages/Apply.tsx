import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { applicationFormSchema, type InsertApplication } from "@shared/schema";
import { saveApplication } from "@/lib/firebase";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, User, Building2, GraduationCap, ClipboardList, FileText } from "lucide-react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import LoadingSpinner from "@/components/LoadingSpinner";

const roleOptions = [
  { value: "data_analysis", label: "Data Analysis Team" },
  { value: "machine_learning", label: "Machine Learning Research" },
  { value: "visualization", label: "Data Visualization" },
  { value: "projects", label: "Project Management" },
  { value: "events", label: "Events & Workshop Coordination" },
  { value: "content", label: "Content & Social Media" },
];

const Apply = () => {
  const [_, navigate] = useLocation();
  const { toast } = useToast();
  const [formAnimationComplete, setFormAnimationComplete] = useState(false);

  const form = useForm<InsertApplication>({
    resolver: zodResolver(applicationFormSchema),
    defaultValues: {
      name: "",
      college: "",
      year: "",
      preference1: "",
      preference2: "",
      preference3: "",
      resumeLink: "",
    },
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setFormAnimationComplete(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const mutation = useMutation({
    mutationFn: (data: InsertApplication) => saveApplication(data),
    onSuccess: () => {
      toast({
        title: "Application submitted successfully!",
        description: "We'll review your application and get back to you soon.",
        variant: "default",
      });
      navigate("/confirmation");
    },
    onError: (error) => {
      toast({
        title: "Error submitting application",
        description: "Please try again later or contact us for assistance.",
        variant: "destructive",
      });
      console.error("Submission error:", error);
    },
  });

  const onSubmit = (data: InsertApplication) => {
    mutation.mutate(data);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen flex flex-col justify-center py-10 px-4"
    >
      <div className="max-w-2xl mx-auto w-full">
        <div className="text-center mb-8">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            <span className="text-primary">DataZen</span> Application
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-neutral-600"
          >
            Join the Data Science Council for 2025-26
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white rounded-xl shadow-lg p-6 md:p-8 border border-neutral-200"
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <motion.div
                className="form-animation"
                style={{ "--animation-order": 1 } as React.CSSProperties}
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2">
                        <User size={16} className="text-primary" />
                        Full Name
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your full name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </motion.div>

              <motion.div
                className="form-animation"
                style={{ "--animation-order": 2 } as React.CSSProperties}
              >
                <FormField
                  control={form.control}
                  name="college"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2">
                        <Building2 size={16} className="text-primary" />
                        College
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your college name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </motion.div>

              <motion.div
                className="form-animation"
                style={{ "--animation-order": 3 } as React.CSSProperties}
              >
                <FormField
                  control={form.control}
                  name="year"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2">
                        <GraduationCap size={16} className="text-primary" />
                        Year
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your year" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="SY">SY - Second Year</SelectItem>
                          <SelectItem value="TY">TY - Third Year</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </motion.div>

              <motion.div
                className="form-animation"
                style={{ "--animation-order": 4 } as React.CSSProperties}
              >
                <label className="flex items-center gap-2 text-neutral-500 text-sm mb-3">
                  <ClipboardList size={16} className="text-primary" />
                  Role Preferences
                </label>

                <div className="space-y-4">
                  <FormField
                    control={form.control}
                    name="preference1"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Preference 1 (Primary Choice)</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select your primary role preference" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {roleOptions.map((option) => (
                              <SelectItem key={option.value} value={option.value}>
                                {option.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="preference2"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Preference 2</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select your secondary role preference" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {roleOptions.map((option) => (
                              <SelectItem key={option.value} value={option.value}>
                                {option.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="preference3"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Preference 3</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select your tertiary role preference" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {roleOptions.map((option) => (
                              <SelectItem key={option.value} value={option.value}>
                                {option.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </motion.div>

              <motion.div
                className="form-animation"
                style={{ "--animation-order": 5 } as React.CSSProperties}
              >
                <FormField
                  control={form.control}
                  name="resumeLink"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2">
                        <FileText size={16} className="text-primary" />
                        Resume Drive Link
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="https://drive.google.com/..."
                          {...field}
                        />
                      </FormControl>
                      <p className="text-xs text-neutral-500 mt-2">
                        Please share a Google Drive link to your resume (make sure it's accessible)
                      </p>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </motion.div>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Button
                  type="button"
                  variant="outline"
                  className="flex items-center justify-center"
                  onClick={() => navigate("/")}
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back
                </Button>
                
                <Button
                  type="submit"
                  className="flex-1 bg-primary hover:bg-primary/90 text-white font-bold py-3 rounded-lg transform transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
                  disabled={mutation.isPending || !formAnimationComplete}
                >
                  Submit Application
                </Button>
              </div>
            </form>
          </Form>
        </motion.div>
      </div>

      <LoadingSpinner show={mutation.isPending} />
    </motion.div>
  );
};

export default Apply;
